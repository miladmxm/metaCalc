import jwt from "jsonwebtoken";
import Users from "../models/User.js";
import Admins from "../models/Admin.js";
const UnauthorizedError = (errMessage = "Unauthorized") => {
  const err = new Error(errMessage);
  err.status = 401;
  throw err;
};
const authProvider = (isAdmin) => {
  return async (req, res, next) => {
    try {
      const cookie = req.cookies;
      if (!cookie || !cookie.jwt) UnauthorizedError();
      const refreshToken = cookie.jwt;
      let decoded;
      try {
        decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);
      } catch (err) {
        UnauthorizedError(err.message);
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
      UnauthorizedError();
    } catch (err) {
      next(err);
    }
  };
};
export default authProvider;
