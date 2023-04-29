import Order from "../model/order.schema.js";
export const orderComplete= async (req,res) =>{
    try{
        
        const { user,id,user_id,status,transaction,transaction_method,product_details,total_price,address }=req.body;
        const result= await Order.create({
            id,user_id, user,status, transaction_method,transaction,product_details,total_price,address
        })
        res.status(200).send(result);
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

export const getOrderByUser= async (req,res)=>{
    try{
        const { user_id }=req.body;
        const order = await Order.find({ "user_id": user_id })
        res.status(200).json(order)
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}