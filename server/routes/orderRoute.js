const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { handleCreateOrder, handleGetAllOrders, handleGetOrderDetails, handleUpdateOrder, handleDeleteOrder } = require('../controllers/orderController')

router.use(auth);

router
  .route("/")
  .get(handleGetAllOrders)
  .post(handleCreateOrder)

router
  .route("/orderId")
  .get(handleGetOrderDetails)
  .delete(handleDeleteOrder)
  .put(handleUpdateOrder)

module.exports = router;