const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Configuración de Express aquí
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send('Algo salió mal :(');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Conexión a MongoDB
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
	console.log('Conexión exitosa a MongoDB');
});
