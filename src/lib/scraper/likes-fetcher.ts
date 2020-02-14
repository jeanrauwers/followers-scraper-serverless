import { accountConfig } from '../config/account-configurations'
import { getYoutubeFollowers, getInstagramFollowers, getTwitterFollowers } from './followers-scraper'
import { getHTML } from './utils'

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
