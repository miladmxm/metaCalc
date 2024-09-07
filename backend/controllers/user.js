import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Users from "../models/User.js";
import GenerateError from "../utils/generateError.js";

export const initUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.user_id, 'username email');
    res.status(200).json({ user: user })
  } catch (err) {
    next(err);
  }
};

const setToken = (res, username, id) => {
  try {
    const token = jwt.sign({ username, id }, process.env.USER_SECRET_KEY, {
      expiresIn: "5d",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 5 * 24 * 60 * 60 * 1000,
    });
  } catch (err) {
    console.log(err);
    GenerateError("serverError", 500);
  }
};
export const logout = async (req, res, next) => {
  try {
    res.clearCookie("jwt")
    console.log(res.cookies)
    res.status(200).json({ message: "loged out" })
  } catch (err) {
    next(err)
  }
}
export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const userIsExist = await Users.findOne({ $or: [{ username }, { email }] });
    if (userIsExist) GenerateError("user is exist", 400);
    const user = await Users.create({ username, email, password });
    setToken(res, username, user._id);
    res.status(201).json({ message: "user created" });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username });
    if (!user) GenerateError("username or password is incorrect", 404);
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword)
      GenerateError("username or password is incorrect", 404);
    setToken(res, username, user._id);
    res.status(200).json({ message: "You successfully logged in." });
  } catch (err) {
    next(err);
  }
};
