import { taskResponder } from './scraper/task-responder'
import { scrapeFetcher } from './scraper/scraper-fetcher'

export async function taskRunner() {
    return scrapeFetcher()
        .then(data => taskResponder(data))
        .catch(err => console.error(err))
}