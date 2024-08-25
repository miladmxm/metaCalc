import { Router } from "express";
import { getAll } from "../controllers/indexes.js";
import { addIndex } from "../controllers/admin.js";

export const mainRouter = new Router()
export const adminRouter = new Router()

// /
mainRouter.get("/",getAll)

// /admin
adminRouter.post("/add",addIndex)
