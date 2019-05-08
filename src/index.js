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
  }; export const scanTable = async (tableName) => {
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
