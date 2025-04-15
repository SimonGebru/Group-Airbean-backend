const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const validateMenuInput = require('../middleware/validateMenuInput'); 

router.get('/', menuController.getMenu);
router.post('/', validateMenuInput, menuController.addProduct); 

module.exports = router;