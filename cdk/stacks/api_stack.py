from aws_cdk import (
    Stack,
    aws_lambda as _lambda,
    aws_iam as iam,
    aws_apigateway as apigw,
    aws_route53 as route53,
    aws_certificatemanager as acm,
    aws_route53_targets as route53_targets,
    Environment
)
from constructs import Construct

class APIStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, env: Environment, env_name: str, **kwargs) -> None:
        super().__init__(scope, construct_id, env=env, **kwargs)
        self.env_name = env_name
        self.domain_name = 'simpletext.dev'
        self.api_domain_name = f'api.{self.env_name}.simpletext.dev' if self.env_name != "prod" else "api.simpletext.dev"
        self.certificate_arn = self.node.try_get_context("certificate-arns")['api'][self.env_name]
        self.__create_stack()

    def __create_stack(self) -> None:
        hosted_zone = self.__get_hosted_zone()

        api = self.__create_and_connect_apigw(hosted_zone)

        self.add_health_check_lambda(api)

    def __get_hosted_zone(self) -> route53.IHostedZone:
        """
        Creates a hosted zone for the API Gateway
        """

        hosted_zone = route53.HostedZone.from_lookup(self, f'{self.env_name}-SimpleTextHZ',
                                                     domain_name=self.domain_name)

        return hosted_zone

    def __create_and_connect_apigw(self, hosted_zone: route53.HostedZone) -> apigw.RestApi:
        """
        Creates the API Gateway and connects it to route53 hosted zone
        """

        acm_certificate = acm.Certificate.from_certificate_arn(self, f'{self.env_name}-SimpleTextAPICert', 
                                                               certificate_arn=self.certificate_arn
                                                               )

        domain_name_opts = apigw.DomainNameOptions(
            certificate=acm_certificate,
            domain_name=self.api_domain_name
        )
        
        api = apigw.RestApi(self, 
                            f'{self.env_name}-SimpleText-API',
                            rest_api_name=f'{self.env_name}-SimpleText-API',
                            description=f'{self.env_name} - Small backend API for SimpleText',
                            domain_name=domain_name_opts,
        )

        route53.ARecord(self, f'{self.env_name}-SimpleText-ApiARecord',
                            zone=hosted_zone,
                            target=route53.RecordTarget.from_alias(route53_targets.ApiGateway(api)),
                            record_name=self.api_domain_name
        )



        return api

    def add_health_check_lambda(self, api: apigw.RestApi) -> None:
        """
        Adds a health check endpoint to API at /health
        """
        health_check_lambda = _lambda.Function(api, f'HealthCheckLambda-{self.env_name}',
                                               runtime=_lambda.Runtime.PYTHON_3_8,
                                               handler='health_check.handler',
                                               code=_lambda.Code.from_asset('lambda'),
                                               environment={
                                                   'ENV': self.env_name
                                               }
                                               )

        health_check_lambda.add_to_role_policy(
            statement=iam.PolicyStatement(
                actions=['logs:CreateLogGroup', 'logs:CreateLogStream', 'logs:PutLogEvents'],
                resources=['*']
            )
        )

        health_check_integration = apigw.LambdaIntegration(health_check_lambda)

        api.root.add_resource('health').add_method('GET', health_check_integration)
