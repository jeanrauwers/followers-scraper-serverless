import axios from 'axios'
import moment from 'moment'


export function sortByDate(aggregateScrapes: any) {
    let result: string[] = aggregateScrapes
    result.sort((a: any, b: any) => moment(a.date).unix() - moment(b.date).unix()).reverse()
    
    return result
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