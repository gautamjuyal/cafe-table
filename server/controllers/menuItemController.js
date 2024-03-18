const MenuItem = require("../models/menuItemModel");

const handleGetMenuItems = async (req, res)=>{
  try{
    console.log('hehe')
    const menuItem = await MenuItem.find({createdBy: req.user})
    res.status(200).json({
      message: "success",
      data : menuItem
    })
  }
  catch(err){
    res.status(400).json({
      status : "failed", 
      error : err
    })
  }
}

const handleGetSingleMenuItem = async (req, res)=>{
  try{
    const item = await MenuItem.findById(req.params.itemId);
    res.status(200).json({
      message: "success",
      item: item
    })
  }
  catch(err){
    res.status(400).json({
      message: "error",
      err
    })
  }
}

const handleCreateMenuItem = async (req, res)=>{
  try{
    const { image, name, description, category, price } = req.body

    const menuItem = await MenuItem.create({
      image, name, description, category, price, createdBy: req.user
    })
    res.status(200).json({
      message: "success",
      _id : menuItem._id
    })
  }
  catch(err){
    res.status(400).json({
      message: "error",
      error: err
    })
  }
}

const handleDeleteMenuItem = async (req, res)=>{
  try{
    const item = await MenuItem.findByIdAndDelete (req.params.itemId);
    res.status(200).json({
      message: "success",
    })
  }
  catch(err){
    res.status(400).json({
      message: "error",
      error: err
    })
  }
}

const handleUpdateMenuItem = (req, res)=>{

}

module.exports = { handleGetMenuItems, handleGetSingleMenuItem, handleCreateMenuItem, handleDeleteMenuItem, handleUpdateMenuItem }