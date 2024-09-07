import mongoose from "mongoose";

const IndexesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        uppercase:true
    },
    serviceCharge:{
        type:Number,
        required:true,
    },
    lockUpDeposit:{
        type:Number,
        required:true,
    },
    serviceChargeMultipliedBy:{
        type:Number,
        required:true,
    }
})

export default mongoose.model("Indexes",IndexesSchema)