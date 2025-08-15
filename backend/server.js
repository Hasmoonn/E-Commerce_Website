// npm i express jsonwebtoken mongoose cors dotenv multer nodemon razorpay stripe validator cloudinary bcrypt

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

// App config 
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.get('/', (req,res) => {
  res.send("API Working.....")
})

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)





app.listen(port, () => {
  console.log("Server is started on PORT", port);
})