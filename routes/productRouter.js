const { Router } = require('express')
const { getProducts, getProduct, getProductsCount, getSearchedProducts } = require('../controllers/productController')

const productRouter = new Router()

productRouter.get('/products', getProducts)
productRouter.get('/products/:id', getProduct)
productRouter.get('/products-search', getSearchedProducts)

module.exports = productRouter
