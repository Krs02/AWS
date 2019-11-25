Steps: 

1. npm i -g serverless
2. serverless create template and provide template like node or java
cmd  : serverless create -t aws-nodejs
tempalte will be created, remove unwanted from serverless yml file.
3. Define your code in lambda,
4. To deploy code in aws we need secret and access key.
5. run this cmd
$ serverless config credentials --provider aws --key KEY --secret SECRET_KEY
6. now its setup account where to deploy
7. to deploy run
cmd : serverless deploy

Output

Serverless: Stack update finished...
Service Information
service: serverless-test
stage: dev
region: us-east-1
stack: serverless-test-dev
resources: 15
api keys:
  None
endpoints:
  GET - CLICK URL HERE
functions:
  getGreeting: serverless-test-dev-getGreeting
  getGreetingLambdaOnly: serverless-test-dev-getGreetingLambdaOnly
layers:
  None
Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.



===

To deploy it to uat/prod
change the stage in serverless.yml





