import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { adminRouter, mainRouter, userRouter } from "../routes/router.js";
import errorHandler from "../middlewares/errorHandler.js";
import request from "request";

const createServer = () => {
  const app = express();

  app.use(cookieParser());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND,
      methods: ["GET", "POST", "DELETE", "PUT"],
    })
  );

  app.use("/user", userRouter);
  app.use("/admin", adminRouter);
  app.use("/api", mainRouter);
  app.use(errorHandler);

  app.use("*", (req, res,next) => {
    const url = process.env.FRONTEND+req.params["0"]
    req.pipe(request({url,qs:req.query})).pipe(res)
  });
  return app;
};
export default createServer;
