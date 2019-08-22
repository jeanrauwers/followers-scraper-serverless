export function timeHelper(isToday = false) {
    const date = new Date()

    const currentDay = ('0' + date.getDate()).slice(-2)
    const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2)
    const today = `${currentDay}${currentMonth}${date.getFullYear()}`
    const hour = ('0' + date.getHours()).slice(-2)
    const minutes = ('0' + date.getMinutes()).slice(-2)
    const seconds = ('0' + date.getSeconds()).slice(-2)

    const currentTime = `${hour}${minutes}${seconds}`
    if (isToday) return today

    return currentTime
}

export function isInLastSixHours(timestamp) {
    const defineTimer = 1000 * 60 * 60 * 6 // 6 hour
    if (timeHelper() - timestamp < defineTimer) {
        return true
    }
    return false
}

export function isFromTheSameDayAndUnderSixHours(aggregateScrapes) {
    let result = []
    
    aggregateScrapes.filter((item, index) => {
        if (item.date === timeHelper(true) && isInLastSixHours(item.updatedAt))
            result.push(item)
    })
    result.sort((a, b) => a.updatedAt < b.updatedAt)

    return result
}
