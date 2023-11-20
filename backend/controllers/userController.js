// controllers/userController.js


const User = require('../models/User.js'); // Asegúrate de tener un modelo User configurado

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error interno del servidor');
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
};
const getUserById = (req, res) => {
	// Lógica para obtener un usuario por ID desde la base de datos
	res.send(`Obteniendo usuario con ID ${req.params.id}`);
};


const updateUser = (req, res) => {
	// Lógica para actualizar un usuario por ID en la base de datos
	res.send(`Actualizando usuario con ID ${req.params.id}`);
};

const deleteUser = (req, res) => {
	// Lógica para eliminar un usuario por ID desde la base de datos
	res.send(`Eliminando usuario con ID ${req.params.id}`);
};

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
};
