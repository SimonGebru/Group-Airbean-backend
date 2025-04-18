const express = require('express');
const { createOrder, getOrderStatus } = require('../controllers/orderController');
const validateOrderItems = require('../middleware/validateOrderItems'); 

const router = express.Router();


router.post('/', validateOrderItems, createOrder);

router.get('/:orderNumber', getOrderStatus);

module.exports = router;