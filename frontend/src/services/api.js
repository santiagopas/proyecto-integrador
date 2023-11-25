// api.js

import axios from 'axios';
import { uploadFile } from '../firebase/config';

const api = axios.create({
	baseURL: 'http://localhost:3001/api/',
});

export const getUsers = () => api.get('/users');
export const getUserById = (id) => api.get(`/users/${id}`);
export const createUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);


// Métodos relacionados con productos
export const getProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

export const createProduct = async (product) => {
	try {
		const productWithImageURL = {
			...product,
			imageUrl: await uploadFile(product.imageFile),
		};

		const response = await api.post('/products', productWithImageURL);

		return response.data;

	} catch (error) {
		console.error('Error al crear el producto:', error);
		throw error;
	}
};




