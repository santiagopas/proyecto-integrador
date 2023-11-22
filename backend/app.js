const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(cors({
  origin: 'http://localhost:5173',
}));

// Configuración de Express aquí
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
  console.error(err); // Loguear el error
  res.status(500).send('Algo salió mal :(');
});

// Configuración de la conexión a MongoDB
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
  dbName: 'users',
};

// Conexión a MongoDB en producción
mongoose.connect(MONGODB_URI, mongooseOptions);

// Manejo de eventos de conexión
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Exportar la instancia de Express (opcional, depende de tus necesidades)
module.exports = app;
