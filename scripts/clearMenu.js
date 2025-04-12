const mongoose = require('mongoose');
const Product = require('../models/Product');

mongoose.connect('mongodb://localhost:27017/airbean')
  .then(async () => {
    await Product.deleteMany({});
    console.log('🧹 Alla produkter raderade!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('🚨 Fel:', err);
  });