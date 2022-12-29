const express = require('express')
const mongoose = require('mongoose')
const corsMiddleware = require('./middleWares/corsMiddleware')
const productRouter = require('./routes/productRouter')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3003

app.use(express.json())
app.use(corsMiddleware)
app.use('/api', productRouter)

const start = async () => {
	try {
		await app.listen(PORT)
		await mongoose.set('strictQuery', false).connect(process.env.DB_URL)
		console.log('Server has been started...')
	} catch (error) {
		console.log(error.message)
	}
}

start()
