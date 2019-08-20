import {timeHelper} from './utils';

function isInLastHour(timestamp) {
    const defineTimer = 1000 * 60 * 60 * 1 // 1 hour

    if (timeHelper() - timestamp < defineTimer) {
        return true
    }
    return false
}

export default function aggregate(scrapes) {
    const aggregateScrapes = [...scrapes]
    let result = []

    aggregateScrapes.filter((item, index) => {
        if (isInLastHour(item.updatedAt) && item.date === timeHelper(true))
            result.push(item)
    })
    result.sort((a, b) => a.updatedAt < b.updatedAt)
    return result
}
