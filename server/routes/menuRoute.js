const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');

const { handleGetMenuItems, handleCreateMenuItem, handleDeleteMenuItem, handleUpdateMenuItem, handleGetSingleMenuItem } = require("../controllers/menuItemController");

router.use(auth);

router
  .route("/")
  .get(handleGetMenuItems)
  .post(handleCreateMenuItem)

router
  .route("/:itemId")
  .get(handleGetSingleMenuItem)
  .put(handleUpdateMenuItem)
  .delete(handleDeleteMenuItem)

module.exports = router;