import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const AdminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
},{timestamps:true})


AdminSchema.pre("save",function(next){
    const admin =this;
    if(!admin.isModified("password")){return next()}
    bcrypt.hash(admin.password, 10, (err, hash) => {
        if (err) return next(err)
        admin.password = hash
        next()
    })
})

export default mongoose.model("Admins",AdminSchema)