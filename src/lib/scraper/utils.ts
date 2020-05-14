import axios from 'axios'

export function sortByDate(aggregateScrapes: object[]): object[] {
    const response = aggregateScrapes.sort((a: any, b: any) => {
        a = a.date.split('/');
        b = b.date.split('/');
        return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
    });

    return response.reverse()
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