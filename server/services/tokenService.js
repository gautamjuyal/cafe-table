const jwt = require("jsonwebtoken");

const generateToken = (res, userId)=>{
  const token = jwt.sign({userId}, process.env.JWT_SECRET)
  res.cookie('jwt', token, {
    httpOnly: true,
    secure : process.env.NODE_ENV != 'development',
    sameSite : 'strict',
  })
}

const verifyToken = (token)=>{
  const user = jwt.verify(token, process.env.JWT_SECRET)
  return user;
}

module.exports = { generateToken, verifyToken }