export function timeHelper(isToday = false) {
    const date = new Date()
    date.toLocaleString('en-GB', {
        hour: '2-digit',
        hour12: false,
        timeZone: 'Europe/London',
    })
    const currentDay = ('0' + date.getDate()).slice(-2)
    const currentMonth = ('0' + (date.getMonth() + 1)).slice(-2)
    const today = `${currentDay}${currentMonth}${date.getFullYear()}`
    const currentTime = `${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
    if (isToday) return today
    return currentTime
}

export function isInLastHour(timestamp) {
    const defineTimer = 1000 * 60 * 60 * 1 // 1 hour

    if (timeHelper() - timestamp < defineTimer) {
        return true
    }
    return false
}
