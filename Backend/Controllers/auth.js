import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Model/User';
import Recyler from '../Model/Recyler'
import jwtSecret from '../config/default.json'

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send('Authentication failed');
    }
    const token = jwt.sign({ userId: user._id }, jwtSecret);
    res.json({ token });
  } catch {
    res.status(500).send('Error logging in');
  }
};
export const crlogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const  cr = await Recyler.findOne({ username });
    if (!cr) {
      return res.status(400).send('Recyler not found');
    }
    const passwordMatch = await bcrypt.compare(password, cr.password);
    if (!passwordMatch) {
      return res.status(401).send('Authentication failed');
    }
    const token = jwt.sign({ userId: cr._id }, jwtSecret);
    res.json({ token });
  } catch {
    res.status(500).send('Error logging in');
  }
};
