import { Router } from "express";
import { getAll } from "../controllers/indexes.js";
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
import { initUser, loginUser, registerUser } from "../controllers/user.js";

const adminAuth = authProvider(true);
const userAuth = authProvider(false);

export const mainRouter = new Router();
export const adminRouter = new Router();
export const userRouter = new Router();

// /
mainRouter.get("/", getAll);

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
userRouter.get("/",userAuth,initUser)
