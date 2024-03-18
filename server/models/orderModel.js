const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  customerName : String,
  tableNumber : String,
  orderItems : Array,
  orderOfTheDay : Number,
  orderTotal : {
    amount : Number,
    currency : String
  },
  orderStatus : String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},
{
  timestamps: true
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;