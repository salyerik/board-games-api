const Product = require('../models/productModel')

const productController = {
	_getFilteredProducts: query => {
		const { priceGte, priceLte, peopleGte, peopleLte, age, stocks, category, subCategory } = query
		return Product.find(priceGte && priceLte ? { 'price.new': { $gte: priceGte, $lte: priceLte } } : {})
			.find(peopleGte && peopleLte ? { people: [peopleGte, peopleLte] } : {})
			.find(age ? { age } : {})
			.find(stocks ? { stocks } : {})
			.find(category ? { category } : {})
			.find(subCategory ? { subCategory } : {})
	},
	getProducts: async (req, res) => {
		try {
			const { page, limit, sort } = req.query
			const items = await productController
				._getFilteredProducts(req.query)
				.sort(sort ? { 'price.new': sort } : {})
				.skip(page ? (page - 1) * limit : 0)
				.limit(limit ? limit : 0)
			const count = await productController._getFilteredProducts(req.query).count()
			if (!page) res.json(items)
			else res.json({ products: items, count })
		} catch (error) {
			res.status(400).json(error)
		}
	},
	getProduct: async (req, res) => {
		try {
			const { id } = req.params
			res.json(await Product.findById(id))
		} catch (error) {
			res.status(400).json(error)
		}
	},
	getSearchedProducts: async (req, res) => {
		try {
			const { search } = req.query
			res.json(await Product.find({ name: { $regex: search, $options: 'i' } }))
		} catch (error) {
			res.status(400).json(error)
		}
	}
}

module.exports = productController
