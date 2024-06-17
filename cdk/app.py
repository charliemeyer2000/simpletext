#!/usr/bin/env python3
import os

import aws_cdk as cdk

from cdk.stacks.api_stack import APIStack
from environment import environmentObj, awsEnvironment


app = cdk.App()
APIStack(app, "CdkStack",
        env=environmentObj,
        env_name=awsEnvironment
)

app.synth()
