import AWS from 'aws-sdk'
const dynamoDb = new AWS.DynamoDB.DocumentClient()
import aggregate from './lib/aggregate'

export const getLikes = async () => {
    try {
        const theData = await scanTable('socialMedia')
        const newData = await aggregate(theData)
        return await {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(
                {
                    data: theData,
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
        Limit: 10,
    }

    let scanResults = []
    let items
    try {
        items = await dynamoDb.scan(params).promise()
        items.Items.forEach(item => scanResults.push(item))
        return scanResults
    } catch (err) {
        console.error(err)
    }
}
