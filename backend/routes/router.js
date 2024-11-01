import { Router } from "express";
import { getAllIndexes, locales } from "../controllers/api.js";
import {
  addIndex,
  initAdmin,
  loginAdmin,
  registerAdmin,
} from "../controllers/admin.js";



import validation from "../middlewares/validation.js";


import { loginValidation, registerValidation } from "../validations/admin.js";
import { weekUpdateValidation } from "../validations/user.js";

import isFirstRequest from "../middlewares/firstRequest.js";
import authProvider from "../middlewares/auth.js";
import { addLastWeek, getAllWeek, getCurrentWeekly, getWeekById, initUser, loginUser, logout, registerUser, updateWeekById, weekIsExistByDate } from "../controllers/user.js";

const adminAuth = authProvider(true);
const userAuth = authProvider(false);

export const mainRouter = new Router();
export const adminRouter = new Router();
export const userRouter = new Router();

// /api
mainRouter.get("/indexes", getAllIndexes);
mainRouter.get("/locales/:lang/*",locales)

// /admin
adminRouter.post("/register", validation(registerValidation), registerAdmin);
adminRouter.post(
  "/setup",
  isFirstRequest,
  validation(registerValidation),
  registerAdmin
);
adminRouter.post("/login", validation(loginValidation), loginAdmin);
adminRouter.post("/add", adminAuth, addIndex);
adminRouter.get("/", adminAuth, initAdmin);


// /user
userRouter.get("/",userAuth,initUser)
userRouter.post("/signup",validation(registerValidation),registerUser)
userRouter.post("/signin",validation(loginValidation),loginUser)
userRouter.delete("/signout",userAuth,logout)

userRouter.get("/logout",userAuth,logout)
userRouter.get("/getcurrentweek",userAuth,getCurrentWeekly)
userRouter.get("/weeks",userAuth,getAllWeek)
userRouter.get("/weeks/isexist/:date",userAuth,weekIsExistByDate)
userRouter.post("/weeks/:date",userAuth,validation(weekUpdateValidation),addLastWeek)
userRouter.get("/weeks/:id",userAuth,getWeekById)
userRouter.put("/weeks/:id",userAuth,validation(weekUpdateValidation),updateWeekById)
