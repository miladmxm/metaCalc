const validation= (validateInstance)=>{
    return (req,res,next)=>{
        const valid = validateInstance(req.body)
        if(!valid){
            res.status(400).json(validateInstance.errors)
            return;
        }else{
            next()
        }
    }
}
export default validation