#!/usr/bin/env python3
import os
import aws_cdk as cdk
from aws_cdk import Environment
from stacks.api_stack import APIStack

class Main:
    def __init__(self):
        self.app = cdk.App()
        self.awsEnvironment = self.app.node.try_get_context("awsEnvironment") or "dev"
        self.account = self.app.node.try_get_context("account") or "653584531510"
        self.region = self.app.node.try_get_context("region") or "us-east-1"

        self.environmentObj = Environment(
            account=self.account,
            region=self.region
        )

        self.__create_stack()
        self.__synth()

    def __create_stack(self):
        APIStack(self.app, f'{self.awsEnvironment}-SimpleTextAPIStack', env=self.environmentObj, env_name=self.awsEnvironment)

    def __synth(self):
        self.app.synth()

if __name__ == "__main__":
    Main()