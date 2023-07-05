const { Schema, model } = require('mongoose');

const Product = model(
	'Product',
	new Schema({
		img: { original: String, compressed: String },
		discount: Number,
		people: [Number],
		timer: [Number],
		age: Number,
		title: String,
		price: { new: Number, old: Number },
		specialOffers: Boolean,
		stocks: Boolean,
		isProductPage: Boolean,
	}),
);

module.exports = Product;
