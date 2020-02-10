import { DynamoDB } from 'aws-sdk';
import { isFromSameDay } from './utils'

interface resultObject {
    twitter: Number;
    instagram: Number;
    youtube: Number;
    date: string;
    updateAt: string;
}


const dynamoDb = new DynamoDB();

export const getLikes = async () => {
    try {
        const dataResults: any = await scanTable('followersLikeApi')
        const filteredData = await isFromSameDay([...dataResults,
        ])

        return await {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(
                {
                    data: filteredData,
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

