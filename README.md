![image003](https://user-images.githubusercontent.com/10606291/57485195-f3ad4c80-72a2-11e9-98cc-46be69d53de2.png)

## Followers Scraper App with Node.js on AWS Serverless

#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` bash
$ npm install serverless -g
```

Clone this repo and install the NPM packages.

``` bash
$ git clone https://github.com/jeanrauwers/followers-scraper-serverless
$ npm install
```

Run a single API on local.

``` bash
$ npm run dev
```
You need to have your own [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html) with your credentials configured and than you can run $npm run deploy  to deploy the lambda to AWS

The scraper lambda works based on CloudWatch schedule that you can setup at your AWS console.


Enjoy and have fun!
