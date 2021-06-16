import mongoose from '../configs/connectionMongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique:true,
    lowercase: true
  },
  password: {
    type: String,
    require: true,
    select: false
  },
  createdAt:{
    type:Date,
    default: Date.now
  },
})

const User = mongoose.model('Users', UserSchema)

export default User;