import Seller from "../model/seller.schema.js";

export const sellerSignup = async (req, res) =>{
    try{
        const exist= await Seller.findOne({ username:req.body.username});
        if(exist){
            return res.status(401).json({message:"Seller already exists"});
        }

        const seller=req.body;
        const newSeller = new Seller(seller);
        await newSeller.save();
        
        res.status(200).json({message:seller});

    }catch(error){
        res.status(500).json({message:error.message});
    }
};

