import axios from 'axios'
import moment from 'moment'


export async function sortByDate(aggregateScrapes: any) {
    const data: any[] = aggregateScrapes
    return await data.sort((a: any, b: any) => moment(a.date).unix() - moment(b.date).unix()).reverse()
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