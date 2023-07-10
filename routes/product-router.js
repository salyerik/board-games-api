const { Router } = require('express');
const productController = require('../controllers/product-controller');
const productRouter = new Router();

productRouter.get('/products', productController.getProducts);
productRouter.get('/products/:id', productController.getProduct);
productRouter.get('/products-search', productController.getSearchedProducts);

module.exports = productRouter;
