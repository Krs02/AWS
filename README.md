Please Follow below Steps: 

1. Install serverless node module 
$npm i -g serverless
2. create serverless template, Boilerplate to start with.
cmd  : serverless create -t aws-nodejs
Folder structure will be created,
3. Define project specific url/function-name, remove unwanted content from serverless yml file.
4. Define your project specific code in lambda,
5. To deploy code in aws we need to add secret and access key. run below cmd to add
$ serverless config credentials --provider aws --key KEY --secret SECRET_KEY
6. above step will setup your account for deployment
7. start deploment using below command
$serverless deploy

===========================================================================================================
Cmd Output - for ref.
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
===========================================================================================================

To deploy it to uat/prod change the value of stage variable in serverless.yml





