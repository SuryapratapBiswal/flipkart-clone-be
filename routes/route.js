import express from "express";

import {
  userSignup,
  userLogin,
  getAllUsers,
} from "../controller/user-controller.js";
import {
  addPaymentGateway,
  cardDetails,
} from "../controller/payment-controller.js";
import {
  getProducts,
  getProductById,
  addProduct,
  removeProductById,
} from "../controller/products-controller.js";
import {
  orderComplete,
  getOrderByUser,
} from "../controller/order-controller.js";
import { sellerSignup } from "../controller/seller-controller.js";
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/alluser", getAllUsers);

router.post("/seller/signup", sellerSignup);

router.get("/products", getProducts);
router.post("/addProduct", addProduct);
router.get("/product/:id", getProductById);
router.get("/product/remove/:id", removeProductById);

router.post("/payment", addPaymentGateway);
router.post("/payment2", cardDetails);
router.post("/order_complete", orderComplete);
router.post("/orderbyuser", getOrderByUser);

export default router;
