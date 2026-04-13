import jwt from "jsonwebtoken";
import User from "../models/User.js";

const middleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, message: "Unatorized" });
    }

    const decode = jwt.verify(token, "rachanaashetty'ssecreatkey");

    if (!decode) {
      return res
        .status(401)
        .json({ success: false, message: "token invalid " });
    }

    const user = await User.findById(decode.id);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "user baba  does not exist" });
    }

    const newNote = { name: user.name, id: user._id };
    req.user = newNote;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Anapad user plz login" });
  }
};
export default middleware;
