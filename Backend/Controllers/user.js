import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Model/User.js";
import Booking from "../Model/Booking.js";
const jwtSecret = "asdfgasdfg";
export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Username already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    console.log("dsds");
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };
    console.log("sdf");
    console.log(jwt);
    const token = jwt.sign(payload, jwtSecret);
    res.json(token);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user");
  }
};
export const fetchLeaderboard=async()=> {
  try {
    const documents = await User.find().sort({ climatoscore: 1 }).exec();
    res.status(200).json(documents.Stringify);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error")
  }
}
export const bookrecycle = async (req, res) => {
  const { pickupTime, eWasteType } = req.body;
  let success = false;
  try {
    const booking = new Booking({
      pickupTime,
      eWasteType,
      user: req.user.id,
    });
     await booking.save();
    success = true;
    req.user.ecoscore+=10;
    res.json({ booking,success });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal server error");
  }
}
export const cancelrecycle = async (req, res) => {
  const { bookingid } = req.body;
  try {
    let booking = await Booking.findOne({ id:bookingid });
    if (!booking) {
      return res.status(404).send("Not Found");
    }
    booking.status="Cancelled"
    res.json({ "Success": "Recycle request cancelled successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal server error");
  }
};