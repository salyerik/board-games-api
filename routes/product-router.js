const { Router } = require('express');
const {
	getProducts,
	getProduct,
	getSearchedProducts,
} = require('../controllers/productController');

const productRouter = new Router();

productRouter.get('/products', getProducts);
productRouter.get('/products/:id', getProduct);
productRouter.get('/products-search', getSearchedProducts);

module.exports = productRouter;
