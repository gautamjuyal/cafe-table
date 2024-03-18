const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  image: String,
  name : String,
  description : String,
  category : String,
  price : {
    amount : Number,
    currency : String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},
{
  timestamps: true
}
)

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;