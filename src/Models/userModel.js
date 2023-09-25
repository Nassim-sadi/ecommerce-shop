import mongoose from 'mongoose';
const userScheme = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please Provide a Username'],
  },
  email: {
    type: String,
    required: [true, 'Please Provide an Email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please Provide a Password'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  role: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Role',
    },
  ],
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model('users', userScheme);
export default User;
