import moment from 'moment'
import uniqid from 'uniqid';
import { getYoutubeCount, getInstagramCount, getTwitterCount } from './likes-fetcher'

export const scrapeFetcher = async () => {
    const date: Date = new Date()
    
    const iCount = await getInstagramCount()
    const tCount = await getTwitterCount()
    const yCount = await getYoutubeCount()

    const response = {
        TableName: 'followersLikeApi',
        Item: {
            id: uniqid(),
            Twitter: tCount,
            Instagram: iCount,
            Youtube: yCount,
            date: moment(date).format('DD/MM/YYYY'),
        },
    }

    return response
}
