const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// const { errorHandler, notFound } = require("./middlewares/errorMiddleware")
const { auth } = require("./middlewares/authMiddleware")
const UserRouter = require('./routes/userRoute');
const MenuRouter = require("./routes/menuRoute");
const OrderRouter = require("./routes/orderRoute");
dotenv.config({path : "./.env"});

// Connection
mongoose
  .connect(process.env.DB.replace('<password>', process.env.DB_PASSWORD))
  .then(()=> console.log("Mongo DB connnected"))
  .catch(err => console.log(err));

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// app.use(errorHandler);
// app.use(notFound);

// Routes
app.use("/api/v1/users", UserRouter)
app.use("/api/v1/menu", MenuRouter)
app.use("/api/v1/orders", OrderRouter)

const PORT = process.env.PORT || 8001

app.listen(PORT, ()=>{
  console.log(`Server started at PORT:${PORT}`)
})