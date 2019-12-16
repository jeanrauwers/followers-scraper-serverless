import axios from 'axios'


export function getDateAndCurrentTime(isCurrentTime = false) {
    const date = new Date()

    const currentDay = ('0' + date.getDate()).slice(-2)
    const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2)
    const today = `${date.getFullYear()}${currentMonth}${currentDay}`
    const hour = ('0' + date.getHours()).slice(-2)
    const minutes = ('0' + date.getMinutes()).slice(-2)
    const seconds = ('0' + date.getSeconds()).slice(-2)
    const currentTime = `${hour}${minutes}${seconds}`
    if (isCurrentTime) return currentTime
    return parseInt(today)
}

export function isFromSameDay(aggregateScrapes) {
    let result: string[] = aggregateScrapes

    result.sort((a: any, b: any) => {
        if (a.date === b.date) return parseInt(a.UpdatedAt) - parseInt(b.UpdatedAt)
        return a.date - b.date
    })

    return result.reverse()
}


export function sum(a, b) {
    return a + b;
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