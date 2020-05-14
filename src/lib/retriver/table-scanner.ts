import { DynamoDB } from 'aws-sdk';
import { tableName } from '../config/account-configurations'

const dynamoDb = new DynamoDB;

export const tableScanner = async (): Promise<object[]> => {
    const params = {
        TableName: tableName,
        Limit: 20
    }

    const scanResults: object[] = []

    const result = await dynamoDb.scan(params).promise()
    result.Items?.forEach((item: any) => {
        let itemObject = {
            id: item.id?.S,
            twitter: item.Twitter?.N,
            instagram: item.Instagram?.N,
            youtube: item.Youtube?.N,
            date: item.date?.S,
        }
        scanResults.push(itemObject)
    })


    return scanResults
}

