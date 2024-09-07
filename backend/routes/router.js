import { Router } from "express";
import { getAll, locales } from "../controllers/api.js";
import {
  addIndex,
  initAdmin,
  loginAdmin,
  registerAdmin,
} from "../controllers/admin.js";



import validation from "../middlewares/validation.js";


import { loginValidation, registerValidation } from "../validations/admin.js";

import isFirstRequest from "../middlewares/firstRequest.js";
import authProvider from "../middlewares/auth.js";
import { initUser, loginUser, logout, registerUser } from "../controllers/user.js";

const adminAuth = authProvider(true);
const userAuth = authProvider(false);

export const mainRouter = new Router();
export const adminRouter = new Router();
export const userRouter = new Router();

// /api
mainRouter.get("/", getAll);
mainRouter.get("/locales/:lang/*",locales)

// /admin
adminRouter.post("/register", validation(registerValidation), registerAdmin);
adminRouter.post(
  "/first",
  isFirstRequest,
  validation(registerValidation),
  registerAdmin
);
adminRouter.post("/login", validation(loginValidation), loginAdmin);
adminRouter.post("/add", adminAuth, addIndex);
adminRouter.get("/", adminAuth, initAdmin);


userRouter.post("/register",validation(registerValidation),registerUser)
userRouter.post("/login",validation(loginValidation),loginUser)
userRouter.get("/logout",userAuth,logout)
userRouter.get("/",userAuth,initUser)
