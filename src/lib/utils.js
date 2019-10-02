export function isSameDay(isCurrentTime = false) {
    const date = new Date()

    const currentDay = ('0' + date.getDate()).slice(-2)
    const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2)
    const today = `${currentDay}${currentMonth}${date.getFullYear()}`
    const hour = ('0' + date.getHours()).slice(-2)
    const minutes = ('0' + date.getMinutes()).slice(-2)
    const seconds = ('0' + date.getSeconds()).slice(-2)
    const currentTime = `${hour}${minutes}${seconds}`

    if (isCurrentTime) return currentTime
    return today
}

export function isFromSameDay(aggregateScrapes) {
    let result = []

    aggregateScrapes.filter((item) => {
        console.log(item.date, isSameDay())
        if (item.date === isSameDay())
            result.push(item)
    })
    result.sort((a, b) => a.updatedAt > b.updatedAt)

    return result
}


export function sum(a, b) {
    return a + b;
}