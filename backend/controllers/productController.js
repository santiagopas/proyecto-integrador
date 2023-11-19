

const getAllProducts = (req, res) => {
	// Lógica para obtener todos los productos desde la base de datos
	res.send(`
		<h1>todos los prductyos </h1>
		🚀
	`);
};

const getProductById = (req, res) => {
	// Lógica para obtener un producto por ID desde la base de datos
	res.send(`Obteniendo producto con ID ${req.params.id}`);
};

const createProduct = (req, res) => {
	// Lógica para crear un nuevo producto en la base de datos
	res.send('Creando un nuevo producto');
};

const updateProduct = (req, res) => {
	// Lógica para actualizar un producto por ID en la base de datos
	res.send(`Actualizando producto con ID ${req.params.id}`);
};

const deleteProduct = (req, res) => {
	// Lógica para eliminar un producto por ID desde la base de datos
	res.send(`Eliminando producto con ID ${req.params.id}`);
};

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
