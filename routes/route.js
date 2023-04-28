import express from "express";

import { userSignup, userLogin ,getAllUsers} from "../controller/user-controller.js";
import { addPaymentGateway } from "../controller/payment-controller.js";
import { getProducts,getProductById,addProduct} from "../controller/products-controller.js";
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get('/alluser',getAllUsers)

router.get("/products", getProducts)
router.post('/addProduct', addProduct)
router.get('/product/:id', getProductById);

router.post('/payment',addPaymentGateway);

export default router;
