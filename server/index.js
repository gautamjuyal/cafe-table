const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const app = express();

const { auth } = require("./middlewares/auth")
const UserRouter = require('./routes/user');
dotenv.config({path : "./.env"})

// Connection
mongoose
  .connect(process.env.DB.replace('<password>', process.env.DB_PASSWORD))
  .then(()=> console.log("Mongo DB connnected"))
  .catch(err => console.log(err));

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/users", UserRouter)

const PORT = process.env.PORT || 8001

app.listen(PORT, ()=>{
  console.log(`Server started at PORT:${PORT}`)
})