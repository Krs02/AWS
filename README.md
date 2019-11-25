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

______________________
$ serverless deploy
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service serverless-test.zip file to S3 (25.2 MB)...

Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
....................
Serverless: Stack update finished...
Service Information
service: serverless-test
stage: production
region: us-east-1
stack: serverless-test-production
resources: 15
api keys:
  None
endpoints:
  GET - https://0kj5ct62ud.execute-api.us-east-1.amazonaws.com/production/users/create
functions:
  getGreeting: serverless-test-production-getGreeting
  getGreetingLambdaOnly: serverless-test-production-getGreetingLambdaOnly
layers:
  None
Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.
______________________

To deploy it to uat/prod change the value of stage variable in serverless.yml





