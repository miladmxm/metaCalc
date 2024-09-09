import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Users from "../models/User.js";
import GenerateError from "../utils/generateError.js";
import Weeks from "../models/Weekly.js";
import getCurrentWeek from "../utils/week.js";
import sum from "../utils/sum.js";
import t from "../utils/t.js";
export const initUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.user_id, "username email");
    res.status(200).json({ user: user });
  } catch (err) {
    next(err);
  }
};

export const getAllWeek = async (req, res, next) => {
  try {
    const weeks = await Weeks.find({ user: req.user_id }, "from to _id dayes");

    const updatedWeeks = weeks.map((week) => {
      let weekObj = week.toObject();
      let commission = 0;
      let profit = 0;

      Object.values(weekObj.dayes).forEach((val) => {
        commission = sum(commission, val.commission);
        profit = sum(profit, val.profit);
      });

      weekObj.profit = profit;
      weekObj.commission = commission;

      return weekObj;
    });

    res.status(200).json({ weeks: updatedWeeks });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const saveDayes = async (req, res, next) => {
  try {
    const updatedWeek = await Weeks.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user_id,
      },
      {
        dayes: req.body.dayes,
      },
      {
        new: true,
      }
    );
    if (!updatedWeek) GenerateError(await t("Not found", req.query.lang), 404);
    res.status(200).json({ week: updatedWeek });
  } catch (err) {
    next(err);
  }
};

export const getCurrentWeekly = async (req, res, next) => {
  try {
    const [startWeek, endWeek] = getCurrentWeek();
    let userWeek = await Weeks.findOne({
      from: startWeek,
      to: endWeek,
      user: req.user_id,
    });
    res.status(200);
    if (!userWeek) {
      userWeek = await Weeks.create({
        from: startWeek,
        to: endWeek,
        user: req.user_id,
      });
      res.status(201);
    }
    res.json({ week: userWeek });
  } catch (err) {
    next(err);
  }
};

const setToken = async (res, username, id) => {
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
    GenerateError(await t("Server error", req.query.lang), 500);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie("jwt");
    console.log(res.cookies);
    res.status(200).json({ message: "loged out" });
  } catch (err) {
    next(err);
  }
};
export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const userIsExist = await Users.findOne({ $or: [{ username }, { email }] });
    if (userIsExist) GenerateError(await t("User is exist", req.query.lang), 400);
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
    if (!user)
      GenerateError(
        await t("Username or password is incorrect", req.query.lang),
        404
      );
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword)
      GenerateError(
        await t("Username or password is incorrect", req.query.lang),
        404
      );
    setToken(res, username, user._id);
    res.status(200).json({ message: "You successfully logged in." });
  } catch (err) {
    next(err);
  }
};
