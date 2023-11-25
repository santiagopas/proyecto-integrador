const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		console.error('Error al obtener productos:', error);
		res.status(500).send('Error interno del servidor');
	}
};

const getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			return res.status(404).json({ message: 'Producto no encontrado' });
		}
		res.json(product);
	} catch (error) {
		console.error('Error al obtener producto por ID:', error.message);
		res.status(500).send('Error interno del servidor');
	}
};

const createProduct = async (req, res) => {
	try {
		const newProduct = new Product(req.body);
		await newProduct.save();
		res.json(newProduct);
	} catch (error) {
		console.error('Error al crear producto:', error.message);
		res.status(500).send('Error interno del servidor');
	}
};

const updateProduct = async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (!updatedProduct) {
			return res.status(404).json({ message: 'Producto no encontrado' });
		}

		res.json(updatedProduct);
	} catch (error) {
		console.error('Error al actualizar producto:', error.message);
		res.status(500).send('Error interno del servidor');
	}
};

const deleteProduct = async (req, res) => {
	try {
		const deletedProduct = await Product.findByIdAndDelete(req.params.id);

		if (!deletedProduct) {
			return res.status(404).json({ message: 'Producto no encontrado' });
		}

		res.json({ message: 'Producto eliminado exitosamente' });
	} catch (error) {
		console.error('Error al eliminar producto:', error.message);
		res.status(500).send('Error interno del servidor');
	}
};

const searchProducts = async (req, res) => {
	try {
		const { query } = req.params;
		const regex = new RegExp(query, 'i');

		const products = await Product.find({
			$or: [
				{ name: { $regex: regex } },
				{ description: { $regex: regex } },
			],
		});

		res.json(products);
	} catch (error) {
		console.error('Error al buscar productos:', error);
		res.status(500).send('Error interno del servidor');
	}
};

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
	searchProducts
};
