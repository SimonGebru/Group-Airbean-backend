const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const menuRoutes = require('./routes/menuRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes'); 
const orderHistoryRoutes = require('./routes/orderHistoryRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB ansluten'))
  .catch(err => console.error(' MongoDB-fel:', err));


app.use('/api/menu', menuRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes); 
app.use('/api/orders/history', orderHistoryRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Servern körs på http://localhost:${PORT}`);
});