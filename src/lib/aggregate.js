import {timeHelper, isInLastHour} from './utils';

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
