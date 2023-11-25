import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import { v4 as uuidv4 } from 'uuid';
const firebaseConfig = {
	apiKey: "AIzaSyD3tpqHedYtPdjOe4ovta4RGlWwutwzFcc",
	authDomain: "images-crud.firebaseapp.com",
	projectId: "images-crud",
	storageBucket: "images-crud.appspot.com",
	messagingSenderId: "923270985389",
	appId: "1:923270985389:web:20aad5feb98cc0f9eef824"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export function uploadFile(file) {
	if (!file) {
		throw new Error('No se proporcionó ningún archivo para cargar.');
	}
	const uniqueFileName = `${file.name}_${uuidv4()}`;
	const storageRef = ref(storage, `productos/${uniqueFileName}`);

	return uploadBytes(storageRef, file)
		.then((snapshot) => {
			console.log('Imagen cargada exitosamente:', snapshot);
			return getDownloadURL(storageRef);
		})
		.catch((error) => {
			console.error('Error al cargar la imagen:', error);
			throw error;
		});
}

