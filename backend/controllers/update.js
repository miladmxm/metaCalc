import connectDB from "../db/connect.js";
import Weeks from "../models/Weekly.js";
connectDB()

async function update (){
    const allWeeks = await Weeks.find({})
    console.log(allWeeks)
}
update()