import jwt from "jsonwebtoken";
import Users from "../models/User.js";
import Admins from "../models/Admin.js";
import GenerateError from "../utils/generateError.js";


const authProvider = (isAdmin) => {
  return async (req, res, next) => {
    try {
      const cookie = req.cookies;
      if (!cookie || !cookie.jwt) GenerateError("Unauthorized", 401);
      const refreshToken = cookie.jwt;
      let decoded;
      try {
        decoded = jwt.verify(
          refreshToken,
          isAdmin ? process.env.ADMIN_SECRET_KEY : process.env.USER_SECRET_KEY
        );
      } catch (err) {
        GenerateError(err.message, 401);
      }
      if (decoded) {
        if (isAdmin) {
          const findAdmin = await Admins.findOne({
            _id: decoded.id,
            username: decoded.username,
          });
          if (findAdmin) {
            req.admin_id = decoded.id;
            return next();
          }
        } else {
          const findUser = await Users.findOne({
            _id: decoded.id,
            username: decoded.username,
          });
          if (findUser) {
            req.user_id = decoded.id;
            return next();
          }
        }
      }
      GenerateError("Unauthorized", 401);
    } catch (err) {
      next(err);
    }
  };
};
export default authProvider;
