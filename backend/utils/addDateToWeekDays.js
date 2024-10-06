const weekDayes = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const addDateToWeekDays = (weekObj) => {
    Object.keys(weekObj.dayes).forEach((_,i)=>{
        const fromDate = new Date(weekObj.from)
        fromDate.setDate(fromDate.getDate() +i+1)
        weekObj.dayes[weekDayes[i+1]].date = fromDate
    })
    return weekObj
}

export default addDateToWeekDays