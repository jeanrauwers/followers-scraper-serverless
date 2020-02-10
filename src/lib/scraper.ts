import { load } from 'cheerio'
import { DynamoDB } from "aws-sdk";
import { getHTML } from './utils'

import moment from 'moment'
import uniqid from 'uniqid';
import accountConfig from './account-configurations'

const dynamoDb = new DynamoDB.DocumentClient()

export async function getYoutubeFollowers(html: any) {
    try {
        const $ = load(html)
        const subsBtn = $(
            '.yt-subscription-button-subscriber-count-branded-horizontal'
        )
        return parseInt(subsBtn[0].attribs['title'])
    } catch (err) {
        console.log(err)
    }
}

export async function getTwitterFollowers(html: any) {
    try {
        const $ = load(html)
        const span = $('[data-nav="followers"] .ProfileNav-value')
        return span.data('count')
    } catch (err) {
        console.log(err)
    }
}

export async function getInstagramFollowers(html: any) {
    try {
        const $ = await load(html)
        const dataInString: any = await $('script[type="application/ld+json"]').html()
        const pageObject = await JSON.parse(dataInString)
        const pageObjToInt = await parseInt(
            pageObject.mainEntityofPage.interactionStatistic
                .userInteractionCount
        )
        return pageObjToInt
    } catch (err) {
        console.log(err)
    }
}

export async function getYoutubeCount() {
    try {
        const html = await getHTML(accountConfig.youtubeUrl)
        const youtubeCount = await getYoutubeFollowers(html)
        return youtubeCount
    } catch (err) {
        console.log(err)
    }
}

export async function getInstagramCount() {
    try {
        const html = await getHTML(accountConfig.instagramUlr)
        const instagramCount = await getInstagramFollowers(html)
        return instagramCount
    } catch (err) {
        console.log(err)
    }
}
export async function getTwitterCount() {
    try {
        const html = await getHTML(accountConfig.twitterUrl)
        const twitterCount = await getTwitterFollowers(html)
        return twitterCount
    } catch (err) {
        console.log(err)
    }
}

export async function taskRunner() {
    const date: Date = new Date()
    let now = moment();

    const iCount = await getInstagramCount()
    const tCount = await getTwitterCount()
    const yCount = await getYoutubeCount()

    const params = {
        TableName: 'followersLikeApi',
        Item: {
            id: uniqid(),
            Twitter: tCount,
            Instagram: iCount,
            Youtube: yCount,
            date: moment(date).format('MM/DD/YYYY'),
            UpdatedAt: now,
        },
    }

    return new Promise((resolve, reject) => {
        try {
            dynamoDb.put(params, (err, data) => {
                if (err) {
                    console.log(`createChatMessage ERROR=${err.stack}`)
                    resolve({
                        statusCode: 400,
                        error: `Could not create message: ${err.stack}`,
                    })
                } else {
                    resolve({
                        statusCode: 200,
                        body: JSON.stringify(params.Item),
                    })
                }
            })
        } catch {
            (err: any) => console.log(`createChatMessage ERROR=${err.stack}`)
        }
    })
    }
