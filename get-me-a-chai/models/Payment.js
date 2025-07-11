import mongoose, { mongo } from "mongoose";
const { Schema, model} = mongoose;

const PaymentSchema = new Schema({
  name: {type: String, require: true},
  to_user: {type: String, require: true},
  oid: {type: String, require: true},
  messsage: {type: String},
  amount: {type: String, require: true},
  createAt: {type: Date, default: Date.now()},
  updateAt: {type: Date, default: Date.now()},
  done: {type: Boolean, default: false},
});

const Payment = model("Payment", PaymentSchema)
export default mongoose.models.Payment || Payment