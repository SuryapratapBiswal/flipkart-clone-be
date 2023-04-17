import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   url: String,
//   detailUrl: String,
//   title: {
//     type: Object,
//     required: true,
//   },
//   price: {
//     type: Object,
//     required: true,
//   },
//   quantity: Number,
//   description: String,
//   discount: String,
//   tagline: String,
// });



const productSchema=  new mongoose.Schema({
  id:{
      type:String,
      required:true,
      unique:true
  },
  img:{
      type:Object,
      required:true,
  },
  title:{
      type:Object,
      required:true
  },
  category:{
    type:String,
    required:true
  },
  price:{
      type:Object,
      required:true
  },
  quantity:Number,
  details:{
      type:Object,
      required:true
  },
  feedback:{
      type:Object,
      required:true
  }

});


const Product = mongoose.model("Product", productSchema);
export default Product;
