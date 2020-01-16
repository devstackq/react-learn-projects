 class DateTime {

    constructor(date) {
        this.date = date ? date : new Date();
//array months names
        this.monthNames = [
            'қаңтар', 'ақпан', 'наурыз',
            'сәуiр', 'мамыр', 'маусым',
            'шiлде', 'тамыз', 'қыркүйек',
            'қазан', 'қараша', 'желтоқсан'
        ];
    //array days names
        this.dayNames = [
            'жексенбi', 'дүйсенбi', 'сейсенбi', 'сәрсенбi',
            'бейсенбi', 'жұма', 'сенбi'
        ];
    }
//methods return hours, minutes, etc - new Date -> have getHours, getMinutes methods
    hours() {
        return this.formatUnitOfTime(this.date.getHours());
    }

    minutes() {
        return this.formatUnitOfTime(this.date.getMinutes());
    }

    seconds() {
        return this.formatUnitOfTime(this.date.getSeconds());
    }

    dayOfWeek() {
        return this.dayNames[this.date.getDay()];
    }

    dayOfMonth() {
        return this.formatUnitOfTime(this.date.getUTCDate());
    }

    month() {
        return this.monthNames[this.date.getMonth()];
    }

    year() {
        return `${this.date.getFullYear()}`;
    }
//09, : 11, 14,
    formatUnitOfTime(unitOfTime) {
        return unitOfTime < 10 ? `0${unitOfTime}` : `${unitOfTime}`;
    }
// date value, day, month, year, format show date
// class DateTIme, (receive arg - state Clock -> Display)
// dateTime. method, dayOfWeeks, take value from [days], etc..
    static toDateString(date) {
        var dateTime = new DateTime(date);

        return `${dateTime.dayOfWeek().substring(0, 10  )} ${dateTime.dayOfMonth()} ${dateTime.month()} ${dateTime.year()}`;
    }
// time value, hours, minutes, etc
    static toTimeString(date) {
        var dateTime = new DateTime(date);
        return `${dateTime.hours()}:${dateTime.minutes()}:${dateTime.seconds()}`;
    }
}

export default DateTime