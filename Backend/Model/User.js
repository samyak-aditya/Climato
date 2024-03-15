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
  climatoScore:{
    type: Number,
    default:0,
  },
  recycles:{
    type:[{pickupTime:Date,
      eWasteType:String,
      status:String,
      }],
  }
});


const User = model('User', userSchema);
export default User;
