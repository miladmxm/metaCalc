import Users from "../models/User.js"

export const registerUser = (req,res,next)=>{
    try {
        console.log(req.body)
        res.send("ok")
    } catch (err) {
        next(err)
    }
}
export const loginUser = (req,res,next)=>{
    try {
        console.log(req.body)
        res.send("ok")
    } catch (err) {
        next(err)
    }
}