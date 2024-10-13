const weekDayes = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const addDateToWeekDays = (weekObj) => {
    Object.keys(weekObj.dayes).forEach((_,i)=>{
        const fromDate = new Date(weekObj.from)
        fromDate.setUTCDate(fromDate.getUTCDate() +i)
        weekObj.dayes[weekDayes[i]].date = fromDate
    })
    return weekObj
}

export default addDateToWeekDays