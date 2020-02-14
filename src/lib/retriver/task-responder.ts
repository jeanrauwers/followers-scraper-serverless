export const taskResponder = async (data: any) => {
    return await {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(
            {
                data: data,
            },
            null,
            2
        ),
    }
}