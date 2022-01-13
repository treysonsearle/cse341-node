
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', productController.getProducts);
router.get('/search', productController.getSearchProducts);

module.exports = router;