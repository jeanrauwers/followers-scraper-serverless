import AWS from 'aws-sdk'
const dynamoDb = new AWS.DynamoDB.DocumentClient()
import aggregate from './lib/aggregate'

export const getLikes = async () => {
    try {
        const theData = await scanTable('likesapi')
        const newData = await aggregate(theData)
        return await {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(
                {
                    data: newData,
                },
                null,
                2
            ),
        }
    } catch (err) {
        console.error(err)
    }
}
export const scanTable = async tableName => {
    const params = {
        TableName: tableName,
    }

    let scanResults = []
    let items
    try {
        do {
            items = await dynamoDb.scan(params).promise()
            items.Items.forEach(item => scanResults.push(item))
            params.ExclusiveStartKey = items.LastEvaluatedKey
        } while (typeof items.LastEvaluatedKey != 'undefined')

        return scanResults
    } catch (err) {
        console.error(err)
    }
}
