import { DynamoDB } from "aws-sdk";
const dynamoDb = new DynamoDB.DocumentClient()

export const taskResponder = (response: any) => {
    console.log(response)
    return new Promise((resolve, reject) => {
        try {
            dynamoDb.put(response, (err, data) => {
                if (err) {
                    console.log(`createChatMessage ERROR=${err.stack}`)
                    resolve({
                        statusCode: 400,
                        error: `Could not create message: ${err.stack}`,
                    })
                } else {
                    resolve({
                        statusCode: 200,
                        body: JSON.stringify(response),
                    })
                }
            })
        } catch {
            (err: any) => console.log(`createChatMessage ERROR=${err.stack}`)
        }
    })
}
