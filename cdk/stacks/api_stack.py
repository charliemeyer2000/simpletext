from aws_cdk import (
    # Duration,
    Stack,
    aws_lambda as _lambda,
    aws_iam as iam,
    aws_apigateway as apigw,
    aws_route53 as route53,
    aws_certificatemanager as acm,
    Environment
)
from constructs import Construct

class APIStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, env: Environment, env_name: str, **kwargs) -> None:
        super().__init__(scope, construct_id, env=env, **kwargs)
        self.env_name = env_name
        self.__create_stack()

    
    def __create_stack(self) -> None:

        hosted_zone = self.__create_hosted_zone_if_not_exists()

        api = self.__create_and_connect_apigw(hosted_zone)

        self.add_health_check_lambda(api)

    def __create_hosted_zone_if_not_exists(self) -> route53.HostedZone:
        """
        Creates the Route53 hosted zone for `api-{environment}.simpletext.dev`
        """

        domain_name = f'api.{self.env_name}.simpletext.dev' if self.env_name != 'prod' else 'api.simpletext.dev'

        hosted_zone = route53.HostedZone(self, f'{self.env_name}-SimpletText-HZ', zone_name=domain_name)

        return hosted_zone
    
    def __create_and_connect_apigw(self, hosted_zone: route53.HostedZone) -> apigw.RestApi:
        """
        Creates the API Gateway and connects it to route53 hosted zone
        """

        acm_certificate = acm.Certificate(self, f'SimpleText-Certificate',
                                          domain_name=hosted_zone.zone_name,
                                          validation=acm.CertificateValidation.from_dns(hosted_zone),
                                          subject_alternative_names=[f'*.{hosted_zone.zone_name}', 'api.dev.simpletext.dev', 'api.staging.simpletext.dev', 'api.simpletext.dev']
                                          )

        
        domain_name_opts = apigw.DomainNameOptions(
            certificate=acm_certificate,
            domain_name=hosted_zone.zone_name,
            endpoint_type=apigw.EndpointType.EDGE # I love edging
        )
        
        api = apigw.RestApi(self, 
                            f'{self.env_name}-SimpleText-API',
                            rest_api_name=f'{self.env_name}-SimpleText-API',
                            description=f'Small backend API for SimpleText {self.env_name}',
                            domain_name=domain_name_opts,
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