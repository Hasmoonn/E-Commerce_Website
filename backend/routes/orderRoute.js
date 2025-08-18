import express from 'express'
import { allOrders, placeOrder, placeOrderStripe, updateStatus, userOrders, verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import userAuth from '../middleware/userAuth.js'

const orderRouter = express.Router()

orderRouter.post('/list', adminAuth ,allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

orderRouter.post('/place', userAuth, placeOrder)
orderRouter.post('/stripe', userAuth, placeOrderStripe)

orderRouter.post('/userorders', userAuth, userOrders)

orderRouter.post('/verifyStripe', userAuth, verifyStripe)



export default orderRouter