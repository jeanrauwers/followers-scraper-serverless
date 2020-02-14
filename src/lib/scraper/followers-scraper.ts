import { load } from 'cheerio'

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