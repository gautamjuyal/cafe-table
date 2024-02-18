const {v4 : uuidv4} = require("uuid");
const bcrypt = require('bcrypt')
const { getUser, setUser } = require("../services/auth")
const User = require("../models/user")

const saltRounds = 10

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
    if(!email || !password) return
    
    const existingUser = await User.findOne({email : email})
    if(existingUser) return res.status(409).json({msg : "user aleready exist"})
    
    bcrypt.hash(password, saltRounds, async (err, hash) =>{
      if(err)
        return res.status(400).json({msg : err})
      const response = await User.create({
        password : hash,
        email : email
      })
      return res.status(200).json({msg : "success", _id : response._id})
    })
  }
  catch(err){
    return res.json({error : err})
  }
}

const handleUserLogin = async (req, res)=>{
  const {email, password} = req.body;
  if(!email || !password)
    return res.status(400).json({msg : "email or password cannot be empty"})

  const user = await User.findOne({email : email})

  if(!user)
    return res.status(400).json({msg : "account does not exist"})

  bcrypt.compare(password, user.password, async (err, result) => {
    // if(err)
    //   return res.status(500).json({msg : "something went wrong"})
    if(result == true)
      return res.status(200).json({msg : "success"}).cookie("cafe-table-jwt", 'hehe')
    else if(result == false)
      return res.status(400).json({msg : "wrong password"})
    else if(err)
      return res.status(500).json({msg : "something went wrong"})
  })
  // return res.json({msg: "cookie"}).cookie()
}

const handleGetUser = ()=>{

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

module.exports = { handleGetAllUsers, handleCreateNewUser, handleUserLogin, handleGetUser, handleUpdateUser, handleDeleteUser }