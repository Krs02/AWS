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

To deploy it to uat/prod change the value of stage variable in serverless.yml
