import axios from 'axios'
import moment from 'moment'


export function getDateAndCurrentTime(isCurrentTime = false) {
    const date: Date = new Date()
    let now = moment();
    const today = moment(date).format('MM/DD/YYYY')

    if (isCurrentTime) return now

    return today
}

export function isFromSameDay(aggregateScrapes: any) {
    let result: string[] = aggregateScrapes

    result.sort((a: any, b: any) => {
        if (a.date === b.date) return parseInt(a.UpdatedAt) - parseInt(b.UpdatedAt)
        return a.date - b.date
    })

    return result.reverse()
}

export async function getHTML(url: string) {
    try {
        const { data: html } = await axios.get(url);
        return html;
    }
    catch (err) {
        throw new Error(err)
    }
}