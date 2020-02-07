import axios from 'axios'

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