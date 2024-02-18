const express = require("express");
const router = express.Router();

const { handleGetAllUsers, handleCreateNewUser, handleUserLogin } = require("../controllers/user")

router
  .route("/")
  .get(handleGetAllUsers)
  .post(handleCreateNewUser)

router
  .route("/login")
  .post(handleUserLogin)

 module.exports = router