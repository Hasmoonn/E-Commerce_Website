import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing order using COD method 
export const placeOrder = async (req, res) => {

  try {
    
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod:"COD",
      payment:false,
      date: Date.now()
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    // clearing cart data
    await userModel.findByIdAndUpdate(userId, {cartData:{}})

    res.json({success: true, message: "Order Placed"})
  } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
  }
}


// placing order using Stripe method 
export const placeOrderStripe = async (req, res) => {

  try {
    
  } catch (error) {
    
  }
}


// placing order using Razorpay method 
export const placeOrderRazorpay = async (req, res) => {

  try {
    
  } catch (error) {
    
  }
}


// All orders data for admin panel 
export const allOrders = async (req, res) => {

  try {
    const orders = await orderModel.find({})

    res.json({success: true, orders})
  } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
  }
}


// User orders data for frontend
export const userOrders = async (req, res) => {

  try {
    
    const { userId } = req.body;

    const orders = await orderModel.find({ userId })

    res.json({ success: true, orders })

  } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
  }
}


// update order status from admin panel
export const updateStatus = async (req, res) => {

  try {
    const {orderId, status} = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status })

    res.json({success: true, message: "Status Updated"})

  } catch (error) {
      console.log(error);
      res.json({success: false, message: error.message})
  }
}