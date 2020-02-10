import { DynamoDB } from 'aws-sdk';
import { sortByDate } from './utils'

interface resultObject {
    twitter: Number;
    instagram: Number;
    youtube: Number;
    date: string;
    updateAt: string;
}

const dynamoDb = new DynamoDB();

export const getLikes = async (event: any) => {
    try {
        const dataResults: any = await scanTable('followersLikeApi')
        const sortedData = await sortByDate([...dataResults])
        // const { sameday } = event.queryStringParameters

        return await {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(
                {
                    data: sortedData,
                },
                null,
                2
            ),
        }
    } catch (err) {
        console.error(err)
    }
}
export const scanTable = async (tableName: string) => {
    const params: any = {
        TableName: tableName,
        Limit: 10
    }

    let scanResults: resultObject[] = []
    let result: any
    try {
        result = await dynamoDb.scan(params).promise()
        result.Items.forEach((item: any) => {
            let itemObject = {
                twitter: item.Twitter?.N,
                instagram: item.Instagram?.N,
                youtube: item.Youtube?.N,
                date: item.date?.S,
                updateAt: item.UpdatedAt?.S
            }
            scanResults.push(itemObject)
        })

        return scanResults
    } catch (err) {
        console.error(err)
    }
}

