import { Router } from "express";
import { getAll } from "../controllers/indexes.js";
import { addIndex, initAdmin, loginAdmin, registerAdmin } from "../controllers/admin.js";
import validation from "../middlewares/validation.js";
import { loginValidation, registerValidation } from '../validations/admin.js'
import isFirstRequest from "../middlewares/firstRequest.js";
import auth from "../middlewares/auth.js";

export const mainRouter = new Router()
export const adminRouter = new Router()

// /
mainRouter.get("/",getAll)

// /admin
adminRouter.post("/register",validation(registerValidation),registerAdmin)
adminRouter.post("/first",isFirstRequest,validation(registerValidation),registerAdmin)
adminRouter.post("/login",validation(loginValidation),loginAdmin)
adminRouter.post("/add",auth,addIndex)

adminRouter.get("/",auth,initAdmin)
