import mongoose from "mongoose";

const orderSchema=  new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    user_id:{
        type:String,
        required:true
    },
    user:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    transaction_method:{
        type:String,
        required:true
    },
    transaction:{
        type:Object,
        required:true
    },
    product_details:{
        type:Array,
        required:true
    },
    total_price:{
        type:String,
        required:true
    },
    address:{
        type:Object,
        required:true
    }

  
  });
  
  
  const Order = mongoose.model("Order", orderSchema);
  export default Order;