import Indexes from "../models/Indexes.js";
import Admins from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerAdmin = async (req, res) => {
  try {
    const newAdmin = await Admins.create({ ...req.body });
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addIndex = async (req, res) => {
  try {
    const { name, serviceCharge, lockUpDeposit, serviceChargeMultipliedBy } =
      req.body;
    if (
      !name ||
      !serviceCharge ||
      !lockUpDeposit ||
      !serviceChargeMultipliedBy
    ) {
      return res.status(402).json({});
    }
    const newIndex = await Indexes.create(req.body);
    res.status(201).json({ index: newIndex });
  } catch (err) {
    console.log(err);
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admins.findOne({ username });
    if (!admin)
      return res
        .status(404)
        .json({ message: "username or password is incorrect" });
    const comparePassword = await bcrypt.compare(password, admin.password);
    if (!comparePassword)
      return res
        .status(404)
        .json({ message: "username or password is incorrect" });

    const token = jwt.sign(
      { username: admin.username, id: admin._id },
      process.env.ADMIN_SECRET_KEY,
      { expiresIn: "5d" }
    );
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 5 * 24 * 60 * 60 * 1000,
    });
    res.status(200).send({ admin });
  } catch (err) {
    console.log(err);
  }
};

export const initAdmin = async (req, res) => {
  try {
    res.send("ok");
  } catch (err) {
    console.log(err);
  }
};
