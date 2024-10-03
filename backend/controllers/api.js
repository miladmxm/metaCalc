import { join } from 'path'
import Indexes from "../models/Indexes.js"

export const getAllIndexes = async (req, res,next) => {
    try {
        const allIndexes = await Indexes.find()
        res.status(200).json({ indexes:allIndexes })
    } catch (err) {
        next(err)
    }
}


export const locales = (req, res) => {
    res.sendFile(join(process.cwd(), "locales", req.params.lang, "translation.json"))
}