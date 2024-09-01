import Indexes from "../models/Indexes.js"

export const getAll =async(req,res)=>{
    try {
        const allIndexes =await Indexes.find()
        res.status(200).json({all:allIndexes})
    } catch (err) {
        console.log(err)
    }
}


