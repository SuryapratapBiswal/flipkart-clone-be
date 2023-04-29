import paytmchecksum from '../paytm/PaytmChecksum.js'
import { paytmParams, paytmMerchantKey } from '../index.js'
import Razorpay  from 'razorpay'

export const addPaymentGateway = async (req, res) => {
    try {
        
      const instance=new Razorpay({
        key_id:"rzp_test_viXVMsSTKxk7ut",
        key_secret:"JjYZUMMNqwcErBC6kAypHTfP"
      });
const { order_id,amount,payment_capture,currency } = req.body;

const options={
    amount:amount,
    currency:currency,
    receipt:order_id,
    payment_capture:payment_capture
};

const order = await instance.orders.create(options);
if(!order) return res.status(500).send("Something accured");


res.status(200).json({success:true,data:order});

       
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const cardDetails = async(req,res)=>{
    try{
        const instance2=new Razorpay({
            key_id:"rzp_test_viXVMsSTKxk7ut",
            key_secret:"JjYZUMMNqwcErBC6kAypHTfP"
          });
          const { razorpay_payment_id } = req.body;
          const order = await instance2.payments.fetch(razorpay_payment_id);
          if(!order) return res.status(500).send("something occured");
        res.status(200).json({success:true,data:order}) 
    }
    catch(error){
        res.status(500).json({ error: error.message })
    }
}