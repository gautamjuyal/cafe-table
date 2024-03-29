const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id : String,
  password : {
    required: true,
    type : String
  },
  name : {
    default: '',
    type: String
  },
  userName : {
    default: '',
    type: String
  },
  bio : {
    default: '',
    type: String
  },
  address: {
    default: '',
    type: String
  },
  phone : {
    default : '',
    type : String
  },
  email : {
    type: String,
    isUnique: true,
    isEmail : true
  },
  preferences : {
    currency: {
      default : "Rs",
      type : String,
    },
    additionalPercentTax : {
      default : 0,
      type : Number,
    },
    incluceTaxInPrice : {
      default : false,
      type : Boolean
    }
  }
},
{timestamps: true}
)

userSchema.pre('save', async function (next){
  if(this.isModified('password')){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
  }
  next();
})

userSchema.methods.matchPasswords = async function(enteredPassword){
  return bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema)

module.exports = User;