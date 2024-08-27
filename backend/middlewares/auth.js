import jwt from "jsonwebtoken";
const auth = (req, res, next) => {
  try {
    const cookie = req.cookies;
    if (!cookie?.jwt) return res.status(401).json({ message: "Unauthorized" });
    const refreshToken = cookie.jwt;
    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
    if (decoded) {
        req.admin_id = decoded.id
        next()
    }else{
        return res.status(401).json({ message: "Unauthorized" });
    }

  } catch (err) {
    console.log(err)
    res.status(5000).json({message:err.message})
  }
};
export default auth