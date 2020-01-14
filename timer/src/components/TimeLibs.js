export default class Time {

    getTime(timeInMilliseconds) {
        let time = timeInMilliseconds
        //formula, for calculate hours, arg - mlsec
        const hours = this.formatUnitOfTime(Math.floor(time / (60 * 60 * 1000)))
        //find time value, hour
        time = time % (60 * 60 * 1000)
        //find minutes, time
        const minutes = this.formatUnitOfTime(Math.floor(time / (60 * 1000)))
        time = time % (60 * 1000)
        const seconds = this.formatUnitOfTime(Math.floor(time % 1000))
        const milliseconds = this.formatUnitOfTime(time % 100)
        return `${hours}:${minutes}:${seconds}:${milliseconds}`

    }
    // 2 first value, cut, and return how string
    formatUnitOfTime(unitOfTime) {
        return unitOfTime < 10 ? `0${unitOfTime}`.substring(0, 2) : unitOfTime.toString().substring(0, 2)
    }
}
//1000 msec - 1sec, 100sec - 100.000 / 3600000 = hours