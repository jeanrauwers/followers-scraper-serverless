![image003](https://user-images.githubusercontent.com/10606291/57485195-f3ad4c80-72a2-11e9-98cc-46be69d53de2.png)

## Followers Scraper App with Node.js on AWS Serverless - open source

#### Supports YouTube, Twitter and Instagram Followers 

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

The scraper lambda works based on CloudWatch schedule that you can define at your AWS console as a cron job.



### Data is returned on /api/likes end point on the following format :

``` json {
}
    "data": [
    {
        "twitter": 270,
        "date": "22082019",
        "id": "22082019082234",
        "youtube": 157,
        "updatedAt": "082234"
    },
    {
        "twitter": 270,
        "date": "22082019",
        "id": "22082019080234",
        "youtube": 157,
        "updatedAt": "080234"
    }
 ]
}


If you need to force to update the data before the cron job you can hit /api/likes/update with a get request and it will trigger the update and return the latest scrape data

```

Enjoy and have fun!
