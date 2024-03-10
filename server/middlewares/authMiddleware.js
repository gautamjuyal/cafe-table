const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const auth = async (req, res, next)=>{
  const token = req.cookies.jwt;
  
  if(token){
    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      next();
    }
    catch(error){
      res.status(400).json({msg : 'Not authorized : invalid token'})
    }
  }
  else{
    res.status(400).json({msg : 'Not authorized : no token'})
  }
}

module.exports = auth ;