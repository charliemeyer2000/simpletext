from aws_cdk import (
    # Duration,
    Stack,
    aws_lambda as _lambda,
    aws_iam as iam,
    aws_apigateway as apigw,
    aws_route53 as route53,
    Environment
)
from constructs import Construct

class APIStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, env: Environment, env_name: str, **kwargs) -> None:
        super().__init__(scope, construct_id, env=env **kwargs)
        self.env_name = env_name
        self.__create_stack()

    
    def __create_stack(self):

        self.__create_hosted_zone_if_not_exists(self)

    def __create_hosted_zone_if_not_exists(self):
        """
        Creates the Route53 hosted zone for `api-{environment}.simpletext.dev`
        """

        domain_name = f'api-{self.env_name}.simpletext.dev' if self.env_name != 'prod' else 'api.simpletext.dev'

        hosted_zone = route53.HostedZone.from_lookup(self, f'{self.env_name}-SimpletText-HZ', domain_name=domain_name)

        # if the hosted zone does not exist, create it
        if not hosted_zone:
            hosted_zone = route53.HostedZone(self, f'{self.env_name}-SimpletText-HZ', zone_name=domain_name)








        

