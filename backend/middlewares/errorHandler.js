const errorHandler = (err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message
    const data = err.data
    res.status(status).json({message,data})
}
export default errorHandler
