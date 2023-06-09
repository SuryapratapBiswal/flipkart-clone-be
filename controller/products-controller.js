import Product from "../model/product.schema.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const addProduct = async (req, res) => {
  try {
    const { id, img, title, category, price, quantity, details, feedback } =
      req.body;
    const result = await Product.create({
      id,
      img,
      title,
      category,
      price,
      quantity,
      details,
      feedback,
    });
    res.send(result);
  } catch (error) {}
};
export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeProductById = async (req, res) => {
  try {
    const Objectid = req.params.id;
    const re = await Product.remove({ _id: Objectid });
    res.status(200).json(re);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
