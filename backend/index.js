import {join} from 'path'
import express from 'express'
import cors from 'cors'
import dotEnv from 'dotenv'
import cookieParser from 'cookie-parser'

import {adminRouter,mainRouter} from './routes/router.js'
import connectDB from './db/connect.js'

dotEnv.config()
const app = express()
connectDB()
app.use(cookieParser())
app.use(express.static(join(process.cwd(),'public')))

app.use(cors())

app.use(express.json())

app.use("/admin",adminRouter)
app.use("/api",mainRouter)

app.use("*",(req,res)=>{
    res.sendFile(join(process.cwd(),'public','index.html'))
})

const PORT = process.env.PORT || 7000
app.listen(PORT,'0.0.0.0',function(){
    console.log(`server is running on port:${PORT}`)
})



