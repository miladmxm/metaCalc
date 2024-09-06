import { join } from "path";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { adminRouter, mainRouter, userRouter } from "../routes/router.js";
import errorHandler from "../middlewares/errorHandler.js";

const createServer = () => {
  const app = express();
  app.use(express.static(join(process.cwd(), "public")));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(cors({ credentials: true, origin: "http://localhost:5173", methods: ["GET", "POST"] }));
  app.use("/user", userRouter);
  app.use("/admin", adminRouter);
  app.use("/api", mainRouter);
  app.use(errorHandler);
  app.use("*", (req, res) => {
    res.sendFile(join(process.cwd(), "public", "index.html"));
  });
  return app;
};
export default createServer;
