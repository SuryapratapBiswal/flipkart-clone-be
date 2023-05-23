
import mongoose from "mongoose";

const sellerSchema= new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20,
      },
      lastname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
      },
      password: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
        trim: true,
        min: 10,
      },
      username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
      },
});

const seller=mongoose.model("Seller",sellerSchema);

export default seller;