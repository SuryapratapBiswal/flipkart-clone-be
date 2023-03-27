import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: {
    type: Object,
    required: true,
  },
  price: {
    type: Object,
    required: true,
  },
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
