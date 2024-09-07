import { join } from 'path'
import Indexes from "../models/Indexes.js"

export const getAll = async (req, res) => {
    try {
        console.log(req.query.lang)
        const allIndexes = await Indexes.find()
        res.status(200).json({ all: allIndexes })
    } catch (err) {
        console.log(err)
    }
}


export const locales = (req, res) => {
    res.sendFile(join(process.cwd(), "locales", req.params.lang, "translation.json"))
}