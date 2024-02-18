const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const app = express();

const { auth } = require("./middlewares/auth")
const UserRouter = require('./routes/user');

const PORT = 8000;
dotenv.config({path : "./.env"})

// Connection
mongoose
  .connect(`mongodb+srv://gautamjuyal94:${process.env.MONGODB_PASSWORD}@cafe-table-data.sbujegc.mongodb.net/?retryWrites=true&w=majority`)
  .then(()=> console.log("Mongo DB connnected"))
  .catch(err => console.log(err));

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/users", UserRouter)

app.listen(PORT, ()=>{
  console.log('server started...')
})