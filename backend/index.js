import express from 'express'
import cors from 'cors'
import dotEnv from 'dotenv'

import {adminRouter,mainRouter} from './routes/router.js'
import connectDB from './db/connect.js'
import cookieParser from 'cookie-parser'

dotEnv.config()
const app = express()
connectDB()
app.use(cookieParser())

app.use(cors())

app.use(express.json())

app.use("/admin",adminRouter)
app.use("/",mainRouter)

const PORT = process.env.PORT || 7000
app.listen(PORT,'0.0.0.0',function(){
    console.log(`server is running on port:${PORT}`)
})



