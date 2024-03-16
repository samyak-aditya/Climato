import jwt from "jsonwebtoken";
import config from "config";
const jwtSecret = "asdfgasdfg";
export default function auth (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    const jwt1=jwt.verify(token, jwtSecret, (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
      } else {
        req.user = decoded.user;
        //console.log(req.user);
        next();
      }
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Server Error" });
  }
}
