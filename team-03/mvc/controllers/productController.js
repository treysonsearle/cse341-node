const Product = require('../models/product');

// handle product/ 
exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('pages/product', {
            title: 'Team Activity 03',
            path: '/product',
            products: products
        });
    });
};

// handle product/search
exports.getSearchProducts = (req, res, next) => {
    const query = req.query.query.toLowerCase();
    Product.search(query, filteredProducts => {
        res.render('pages/product', {
            title: 'Team Activity 03',
            path: '/product',
            products: filteredProducts
        });
    });
};