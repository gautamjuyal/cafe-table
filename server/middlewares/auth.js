const jwt = require('jsonwebtoken');
const { getUser } = require("../services/auth")

const auth = (req, res, next)=>{
  const token = req.cookies['cafe-table-jwt'];
  if(!token) return res.json({msg : "login required"})
  const user = getUser(token)
  if(!user) return res.json({msg : "no prev login record"})
  if(user) return res.status(200).json({msg : "success"})

  next()
}

module.exports = auth ;