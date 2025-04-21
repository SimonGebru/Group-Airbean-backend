const mongoose = require('mongoose');
const Product = require('../models/Product');

mongoose.connect('mongodb://localhost:27017/airbean');

const products = [
  { name: 'Bryggkaffe', desc: 'En klassiker', price: 49 },
  { name: 'Latte', desc: 'Med skummad mjölk', price: 59 },
  { name: 'Cappuccino', desc: 'Lite mer skum', price: 55 },
  { name: 'Espresso', desc: 'Liten men kraftfull', price: 45 }
];

Product.insertMany(products)
  .then(() => {
    console.log('☕️ Menyn är inlagd!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('🚨 Fel:', err);
    mongoose.disconnect();
  });