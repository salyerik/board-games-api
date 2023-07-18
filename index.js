require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const corsMiddleware = require('./middlewares/cors-middleware');
const productRouter = require('./routes/product-router');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(corsMiddleware);
app.use('/api', productRouter);

const start = () => {
	try {
		mongoose.set('strictQuery', false).connect(process.env.DB_URL, () => {
			app.listen(PORT);
		});
		console.log(`Server is running on Port: ${PORT}`);
	} catch (error) {
		console.log(error.message);
	}
};

start();
