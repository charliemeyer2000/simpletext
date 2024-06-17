from aws_cdk import (
    Environment
)
from app import app


awsEnvironment = app.node.try_get_context("awsEnvironment") or "dev"
account = app.node.try_get_context("account") or None
region = app.node.try_get_context("region") or "us-east-1"

environmentObj = Environment(
    account=account,
    env=awsEnvironment,
    region=region
)