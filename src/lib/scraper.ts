import { taskResponder } from './task-responder'
import { scrapeFetcher } from './scraper-fetcher'

export async function taskRunner() {
    return scrapeFetcher()
        .then(data => taskResponder(data))
        .catch(err => console.error(err))
}