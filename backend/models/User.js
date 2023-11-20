const mongoose = require('mongoose');
// database name: 'ecommerce'
// collection name: 'users'


const userSchema = new mongoose.Schema({

	name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Dirección de correo electrónico no válida'],
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
    select: false,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
});

const User = mongoose.model('User', userSchema);



module.exports = User;
