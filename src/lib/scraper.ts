import axios from 'axios'
import cheerio from 'cheerio'
import accountConfig from './account-configurations'
import { DynamoDB } from "aws-sdk";
import { isSameDay } from './utils'

const dynamoDb = new DynamoDB.DocumentClient()

export async function getHTML(url) {
    try {
        const { data: html } = await axios.get(url)
        return html
    } catch (err) {
        console.log(err)
    }
}

export async function getYoutubeFollowers(html) {
    try {
        const $ = cheerio.load(html)
        const subsBtn = $(
            '.yt-subscription-button-subscriber-count-branded-horizontal'
        )
        return parseInt(subsBtn[0].attribs['title'])
    } catch (err) {
        console.log(err)
    }
}

export async function getTwitterFollowers(html) {
    try {
        const $ = cheerio.load(html)
        const span = $('[data-nav="followers"] .ProfileNav-value')
        return span.data('count')
    } catch (err) {
        console.log(err)
    }
}

export async function getInstagramFollowers(html) {
    try {
        const $ = await cheerio.load(html)
        const dataInString = await $('script[type="application/ld+json"]').html()
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
    const iCount = await getInstagramCount()
    const tCount = await getTwitterCount()
    const yCount = await getYoutubeCount()

    const today = isSameDay()
    const currentTime = isSameDay(true)

    const params = {
        TableName: 'SocialMediaApi',
        Item: {
            id: `${today}${currentTime}`,
            twitter: tCount,
            instagram: iCount,
            youtube: yCount,
            date: today,
            updatedAt: currentTime,
        },
    }

    return await new Promise((resolve, reject) => {
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
            err => console.log(`createChatMessage ERROR=${err.stack}`)
        }
    })
}