export default function transDate(time) {
    const date = new Date(time)
    const month = date.getMonth() + 1
    const day = date.getDay()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const o = {
        year: date.getFullYear(),
        month: month > 10 ? month : '0' + month,
        day: day > 10 ? day : '0' + day,
        hour: hour > 10 ? hour : '0' + hour,
        minute: minute > 10 ? minute : '0' + minute,
        second: second > 10 ? second : '0' + second
    }
    return o
}