class TimeDisplay {
    constructor(element) {
        this.TimeStyles = {
            DEFAULT: 1,
            NO_SECONDS: 2,
            AM_PM: 3,
            AM_PM_NO_SECONDS: 4
        }
        this.element = element
        this.timeStyle = this.getSavedStyle()
        this.render()
        this.element.addEventListener('click', this.onClickedTime.bind(this))
        setInterval(this.render.bind(this), 50)
    }
    render() {
        let date = new Date()

        let time = {
            hours: String(date.getHours()),
            hoursAmerican: String((date.getHours() - 1) % 12 + 1),
            amPm: date.getHours() > 12 ? "PM" : "AM",
            minutes: String(date.getMinutes()).padStart(2, '0'),
            seconds: String(date.getSeconds()).padStart(2, '0'),
        }

        switch (this.timeStyle) {
            case this.TimeStyles.DEFAULT:
                this.element.textContent = `${time.hours}:${time.minutes}:${time.seconds}`
                break;
            case this.TimeStyles.NO_SECONDS:
                this.element.textContent = `${time.hours}:${time.minutes}`
                break;
            case this.TimeStyles.AM_PM:
                this.element.textContent = `${time.hoursAmerican}:${time.minutes}:${time.seconds} ${time.amPm}`
                break;
            case this.TimeStyles.AM_PM_NO_SECONDS:
                this.element.textContent = `${time.hoursAmerican}:${time.minutes} ${time.amPm}`
                break;
        }
    }

    onClickedTime() {
        if (this.timeStyle >= 4) {
            this.timeStyle = 1
        } else {
            this.timeStyle += 1
        }

        this.setSavedStyle(this.timeStyle)
    }

    setSavedStyle(value) {
        localStorage.timeStyle = value
    }

    getSavedStyle() {
        return Number(localStorage.timeStyle) || this.TimeStyles.DEFAULT
    }
}
const DateStyles = {
    DEFAULT: 1,
    SWAP_MD: 2
}

class DateDisplay {
    constructor(element) {
        this.element = element
        this.dateStyle = this.getSavedStyle()
        this.render()
        this.startInterval()
    }

    startInterval() {
        this.element.addEventListener('click', this.onClickedDate.bind(this))
        setInterval(this.render.bind(this), 100)
    }

    render() {
        let date = new Date()

        let parts = {
            month: date.getMonth() + 1,
            day: date.getDate(),
            year: date.getFullYear()
        }

        if (this.dateStyle == 2) {
            this.element.textContent = [
                parts.month, parts.day, parts.year
            ].join('/')
        } else {
            this.element.textContent = [
                parts.day, parts.month, parts.year
            ].join('/')
        }
    }

    onClickedDate() {
        if (this.dateStyle === DateStyles.DEFAULT) {
            this.dateStyle = DateStyles.SWAP_MD
        } else {
            this.dateStyle = DateStyles.DEFAULT
        } // TODO: fix this middery

        this.setSavedStyle(this.dateStyle)
    }

    setSavedStyle(value) {
        localStorage.dateStyle = value
    }

    getSavedStyle() {
        return Number(localStorage.dateStyle) || DateStyles.DEFAULT
    }
}

export { TimeDisplay, DateDisplay }