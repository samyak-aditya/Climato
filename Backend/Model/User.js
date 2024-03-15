import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  latitude:{
    type:String,

  },
  longitude:{
    type:String,
  }
});


const User = model('User', userSchema);
export default User;
