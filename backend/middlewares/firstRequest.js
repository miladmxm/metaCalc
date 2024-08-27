import Admins from "../models/Admin.js";
const isFirstRequest=async (req,res,next)=>{
    try {
        if(await Admins.countDocuments({})>0){
            res.status(404).json({message:"not found!"})
            return;
        }else{
            next()
        }
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}

export default isFirstRequest