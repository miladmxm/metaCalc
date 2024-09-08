const getCurrentWeek = (d) => {

    // current date - day of week  = start week and set time to ziro
    const startDate = d || new Date
    startDate.setUTCHours(0, 0, 0, 0)
    startDate.setUTCDate(startDate.getUTCDate() - startDate.getUTCDay());


    // start date + 7 = next start week with time ziro and next start week - one miliseconds = end of current week
    const endDate = new Date(startDate)
    endDate.setUTCDate(endDate.getDate() + 7)
    endDate.setUTCMilliseconds(endDate.getUTCMilliseconds() - 1)


    // startDate.setUTCDate(startDate.getUTCDate() + 1)
    // endDate.setUTCDate(endDate.getUTCDate() + 1)

    return [startDate, endDate]
}
export default getCurrentWeek