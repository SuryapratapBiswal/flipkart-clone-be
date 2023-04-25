
import Product from "./model/product.schema.js";
import { newproducts } from "./constants/newproducts.js"
import Product from "./model/product.schema.js";
const DefaultData = async () => {
  try {
    await Product.insertMany(newproducts);
    console.log(`Data inserted successfully`);
  } catch (error)
 {
    console.log(`Error while inserting deafult data: ${error.message}`);
  }
};
export default DefaultData;
