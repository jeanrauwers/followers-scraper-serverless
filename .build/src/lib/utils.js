"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSameDay(isCurrentTime) {
    if (isCurrentTime === void 0) { isCurrentTime = false; }
    var date = new Date();
    var currentDay = ('0' + date.getDate()).slice(-2);
    var currentMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    var today = "" + currentDay + currentMonth + date.getFullYear();
    var hour = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2);
    var currentTime = "" + hour + minutes + seconds;
    if (isCurrentTime)
        return currentTime;
    return today;
}
exports.isSameDay = isSameDay;
function isFromSameDay(aggregateScrapes) {
    var result = [];
    aggregateScrapes.filter(function (item) {
        if (item.date === isSameDay())
            result.push(item);
    });
    result.sort(function (a, b) { return a.updatedAt - b.updatedAt; }).reverse();
    return result;
}
exports.isFromSameDay = isFromSameDay;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
//# sourceMappingURL=utils.js.map