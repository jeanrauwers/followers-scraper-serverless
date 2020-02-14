
import { tableScanner } from './retriver/table-scanner';
import { taskResponder } from './retriver/task-responder'
import { sortByDate } from './scraper/utils'


export async function getLikes() {
    return tableScanner()
        .then(data => sortByDate(data))
        .then(data => taskResponder(data))
        .catch(err => console.error(err))
}