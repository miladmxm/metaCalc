const getCurrentWeek =()=>{
    const d = new Date()


    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6
    
    var firstday = new Date(curr.setDate(first));
    var lastday = new Date(curr.setDate(last));
    console.log(firstday,"\n",lastday)
/*
    d.setDate(d.getDate() + 6)

    const dayInWeek =d.getDay()

    if(dayInWeek){
        d.setDate(d.getDate() - (dayInWeek))
    }
    let startString = `${d.getFullYear()}`
    
    startString += (d.getMonth()+1)<10?`-0${(d.getMonth()+1)}`:`-${d.getMonth()+1}`
    startString += (d.getDate())<10?`-0${d.getDate()}`:`-${d.getDate()}`


    const StartDate = new Date(startString)
    console.log(StartDate)
    const EndDate = new Date()
    EndDate.setDate(StartDate.getDate()+6)
    // const startWeek = new Date*/
}
getCurrentWeek()