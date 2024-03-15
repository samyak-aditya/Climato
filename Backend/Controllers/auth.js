
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Model/model';


const JWT_SECRET_KEY = 'your_secret_key';


export const signUp = async (req, res) => {
  try {
    
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }

 
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
   
    const newUser = new User({
      fullname: req.body.fullname,
      username: req.body.username,
      password: hashedPassword
    });
    
    await newUser.save();
    
    res.status(201).send('User registered successfully');
  } catch {
    res.status(500).send('Error registering user');
  }
};


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

   
    const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY);
    res.json({ token });
  } catch {
    res.status(500).send('Error logging in');
  }
};
