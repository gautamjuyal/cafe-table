const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware")
const { handleGetAllUsers, handleCreateNewUser, handleUserLogin, handleUserLogout, handleGetUser } = require("../controllers/userController")

router
  .route("/")
  .get(auth, handleGetAllUsers)
  .post(handleCreateNewUser)
router
  .route('/:userId')
  .get(auth, handleGetUser)
router
  .route("/login")
  .post(handleUserLogin)

router
  .route("/logout")
  .post(handleUserLogout)

module.exports = router