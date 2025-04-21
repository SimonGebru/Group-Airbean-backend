const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const { getUserOrderHistory } = require('../controllers/orderHistory');

router.get('/', verifyToken, getUserOrderHistory);

module.exports = router;