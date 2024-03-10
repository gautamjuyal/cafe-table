const User = require("../models/userModel");
const {generateToken, verifyToken} = require("../services/tokenService");

const handleGetAllUsers = async (req, res) =>{
  try{
    const allUsers = await User.find({})
    return res.status(200).json(allUsers)
  }
  catch(err){
    return res.json({error : err})
  }
}

const handleCreateNewUser = async (req, res) =>{
  try{
    const {email, password} = req.body;
    
    const existingUser = await User.findOne({email})
    if(existingUser){
      return res.status(400).json({msg : 'User already exists'})
    }
      
    const user = await User.create({
      email, password
    })
    if(user){
      generateToken(res, {email, password})
      return res.status(200).json({msg : "success", _id : user._id})
    }
  }
  catch(err){
    return res.json({error : err})
  }
}

const handleUserLogin = async (req, res)=>{
  const {email, password} = req.body;

  const user = await User.findOne({email : email})
  
  if(user && user.matchPasswords(password)){
    generateToken(res, user._id)
    res.status(200).json({msg : "success", userId : user._id})
  }
  else{
    res.status(400).json('Invalid username or password')
  }
}

const handleUserLogout = async (req, res) =>{
  res.cookie('jwt', "", {
    httpOnly : true,
    expires : new Date(0)
  })

  res.status(200).json({msg : "logged out"})
}

const handleGetUser = async (req, res)=>{
  const user = User.findById(req.params.userId);
  res.status(200).json({message: "success", user : user.select("-password")});
}

const handleUpdateUser = ()=>{
  // await User.create({
  //   password : body.password,
  //   name : body.name,
  //   userName : body.userName,
  //   bio : body.bio,
  //   address : body.address,
  //   contactInfo : {
  //     phone : body.contactInfo.phone,
  //     email : body.contactInfo.email
  //   },
  //   preferences : {
  //     currency : body.preferences.currency,
  //     additionalPercentTax : body.preferences.additionalPercentTax,
  //     includeTaxInPrice : body.preferences.includeTaxInPrice
  //   },
  // })
}

const handleDeleteUser = ()=>{
  
}

module.exports = { handleGetAllUsers, handleCreateNewUser, handleUserLogin, handleUserLogout, handleGetUser, handleUpdateUser, handleDeleteUser }