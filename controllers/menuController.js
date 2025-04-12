const Product = require('../models/Product');

exports.getMenu = async (req, res) => {
  try {
    const menu = await Product.find();
    res.status(200).json(menu);
  } catch (err) {
    res.status(500).json({ error: 'Kunde inte hämta menyn' });
  }
};
exports.addProduct = async (req, res) => {
    const { name, desc, price } = req.body;
  
    if (!name || !price) {
      return res.status(400).json({ error: 'Namn och pris krävs' });
    }
  
    try {
      const product = new Product({ name, desc, price });
      await product.save();
      res.status(201).json({ message: 'Produkt tillagd', product });
    } catch (err) {
      res.status(500).json({ error: 'Kunde inte lägga till produkten' });
    }
  };