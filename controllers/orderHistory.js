const Order = require('../models/Order');

exports.getUserOrderHistory = async (req, res) => {
  try {
    
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: 'Ingen användare inloggad' });
    }

    
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders
    });
  } catch (err) {
    console.error('Fel vid hämtning av orderhistorik:', err);
    res.status(500).json({ error: 'Kunde inte hämta orderhistorik' });
  }
};