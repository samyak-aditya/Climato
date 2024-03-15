import { Schema, model } from 'mongoose';

const recyclerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});


const Recyler = model('User', recyclerSchema);
export default Recyler;
