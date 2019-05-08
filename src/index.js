import { getInstagramCount, getTwitterCount } from './lib/scraper';
import AWS from 'aws-sdk';
const dynamoDb =  new AWS.DynamoDB.DocumentClient();


export const getLikes = async () => {

	const theData = await scanTable("likesapi");
	return await {
	  statusCode: 200,
	  headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": true
	  },
	  body: JSON.stringify(
		{
		  data:theData
		},
		null,
		2
	  )
	};
  };

  
  export const createDataOnDynamo = async (event, context, callback) => {
		const data = JSON.parse(event.body);
		const now = new Date();
		const currentDay = ("0" + now.getDate()).slice(-2);
		const currentMonth = ("0" + (now.getMonth() + 1)).slice(-2);
		const today = `${(currentDay)} - ${(currentMonth)} - ${now.getFullYear()}`;
		const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

	

	if (typeof data !== "object") {
	  console.error("Validation Error - type of data is not String");
	  callback(new Error(`Couldn't create the data.`));
	  return;
	}
  
	const params = {
	  TableName: "likesapi",
	  Item: {
		id:"1",
		twitter:data.twitter,
		instagram:data.instagram,
		date: today,
		updatedAt: currentTime
	  }
	};

	dynamoDb.put(params, (error, result) => {
		if (error) {
			console.log(error);
		  callback(new Error(`Couldn't create the data.`));
		  return;
		}
	  
		const response = {
			statusCode: 200,
		  body: JSON.stringify(result.Item)
		};
			  
		callback(null, response);
	  });
	  
  };

export const scanTable = async (tableName) => {
    const params = {
        TableName: tableName,
    };

    let scanResults = [];
    let items;
    do{
        items =  await dynamoDb.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey  = items.LastEvaluatedKey;
    }while(typeof items.LastEvaluatedKey != "undefined");

    return scanResults;

};