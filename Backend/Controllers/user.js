import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Model/User';

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ name });
      if (existingUser) {
        return res.status(400).send('Username already exists');
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
      const user = new User({
        name,
        email,
        hashedPassword
      });
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      res.json({ token });
    } catch {
      res.status(500).send('Error registering user');
    }
  };
  async function fetchLeaderboard() {
    try {
      const documents = await User.find().sort({ climatoscore: 1 }).exec();
      return documents;
    } catch (err) {
      console.error('Error:', err);
      throw err; // Rethrow the error
    }
  }
  export const bookrecycle =async()=>{
    const { pickupTime, eWasteType } = req.body;
    let success = false;
    try {
      const newRecycle = new Recycles({
        pickupTime,
        eWasteType,
        user: req.user.id,
        bookingid: uuidv4(),
      });
      const savedRecycle = await newRecycle.save();
      success = true;
      req.user.climatoscore+=10;
      res.json({ savedRecycle,success });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal server error");
    }
  }
  router.post("/bookedrequestcompletion", fetchuser, async (req, res) => {
    const { bookingid } = req.body;
    try {
      const recycle = await Recycles.findOne({ bookingid });
      if (!recycle) {
        return res.status(404).send("Not Found");
      }
      res.json(recycle);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal server error");
    }
  })