const Order = require("../models/orderModel");

const handleGetAllOrders = async (req, res)=>{
  try{
    const orders = await Order.find({ createdBy: req.user})
    res.status(200).json({
      message: "success",
      data: orders
    })
  }
  catch(err){
    res.status(400).json({
      message: "error",
      err
    })
  }
}

const handleCreateOrder = async (req, res)=>{
  try{
    const { customerName, tableNumber, orderItems, orderOfTheDay, orderTotal, orderStatus, } = req.body
    const order = await Order.create({ 
      customerName, tableNumber, orderItems, orderOfTheDay, orderTotal, orderStatus, createdBy: req.user
    })
    res.status(200).json({
      message: "success",
      orderId: order._id
    })
  }
  catch(err){
    res.status(400).json({
      message: "error",
      err
    })
  }
}

const handleGetOrderDetails = async (req, res)=>{
  try{
    const order = await Order.findById(req.params.orderId)
    res.status(200).json({
      message: "success",
      data: order
    })
  }
  catch(error){
    res.status(400).json({
      status: "error",
      error
    })
  }
}

const handleUpdateOrder = async (req, res)=>{
  
}

const handleDeleteOrder = async (req, res)=>{
  try{
    await Order.findByIdAndDelete(req.params.orderId)
    res.status(200).json({
      message: "success"
    })
  }
  catch(error){
    res.status(400).json({
      message: "error",
      error
    })
  }
}

module.exports = { handleGetAllOrders, handleCreateOrder, handleGetOrderDetails, handleUpdateOrder, handleDeleteOrder }