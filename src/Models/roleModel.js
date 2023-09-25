import mongoose from 'mongoose';
const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  permissions: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Permission',
    },
  ],
});
const Role = mongoose.model.roles || mongoose.model('roles', roleSchema);
export default Role;
