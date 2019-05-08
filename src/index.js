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


export const createDataOnDynamo = async (event, context, callback) => {
	const data = JSON.parse(event.body);
	console.log(data)
	const now = new Date();
	const currentDay = ("0" + now.getDate()).slice(-2);
	const currentMonth = ("0" + (now.getMonth() + 1)).slice(-2);
	const today = `${(currentDay)} - ${(currentMonth)} - ${now.getFullYear()}`;
	const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

	console.log(today)



if (typeof data !== "object") {
	console.error("Validation Error - type of data is not String");
	callback(new Error(`Couldn't create the data.`));
	return;
}

const params = {
	TableName: "likesapi",
	Item: {
	id:today+currentTime,
	twitter:data.twitter,
	instagram:data.instagram,
	date: today,
	updatedAt: currentTime
	}
};

return await new Promise((resolve, reject) => {
	dynamoDb.put(params, (error, data) => {
			if (error) {
			console.log(`createChatMessage ERROR=${error.stack}`);
					resolve({
					statusCode: 400,
					error: `Could not create message: ${error.stack}`
					});

			} else {
			console.log(`createChatMessage data=${JSON.stringify(data)}`);
			resolve({ statusCode: 200, body: JSON.stringify(params.Item) });
			}
	});
});	
};