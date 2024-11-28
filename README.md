# Serverless Framework Node Express API on AWS

1. Install serverless framework and aws CLI
   npm i serverless -g

# AWS CLI

    curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
    sudo installer -pkg AWSCLIV2.pkg -target /

# You should have a aws account. Go to IAM service, create a user and create access key for that user. You should have Access Key Id and Secret Key which is necessary to configure aws in next step.

2. After installation, configure your AWS CLI with your credentials: (Use Access Key Id, Secret Key and give region: for sydney: ap-southeast-2)

   aws configure
   aws sts get-caller-identity

3. Go to terminal and use serverless to start a templet for node/express project

- serverless
- choose : AWS/Node.js/Express API
- give project name
- you should have a template now with serverless.yml, handler.js and .serverless folder additonal to normal node project.

4. Make a src folder, write code as you would with a node and express project
5. Update your routes in handler.js

### Folder Structure

<!--
projecct-name/
        ├── .serverless/ # Deployment artifacts
        ├── handler.js # Lambda handler file
        ├── node_modules/ # Node dependencies
        ├── package.json # Project dependencies
        ├── serverless.yml # Serverless configuration file

        └── src/ # Source code folder
                  - ├── routers/ # Router for organizing routes
                  - └── ... # Other required files (modles, middle)
  -->

6. Test in development:
   serverless dev

7. Deploy to lambda
   serverless deploy
