const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({path : "./.env"})
const secret = process.env.JWTSECRET

const setUser = (user)=>{
  const payload = {id: user._id, email : user.email}
  return jwt.sign(payload, secret)
}

const getUser = (token)=>{
  if(!token) return null
  try{
    return jwt.verify(token, secret);
  }
  catch(err){
    return err;
  }
}

module.exports = {setUser, getUser}