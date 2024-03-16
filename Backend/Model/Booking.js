import { Schema,model } from 'mongoose';

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  pickupLocation: { type: String, required: true },
  pickupTime: { type: Date, required: true },
  eWasteType: { type: String, required: true },
  status:{
    type:String,
  },
    img:
    {
        data: Buffer,
        contentType: String
    }
  
});

const Booking = model("Booking", bookingSchema);
export default Booking
