import PropTypes from "prop-types";
import { useState } from "react";
import { createProduct } from "../services/api";
import { uploadFile } from "../firebase/config";
import "../styles/components/ProductForm.css";

const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    imageUrl: "",
    stock: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    setProduct({ ...product, imageFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (product.imageFile) {
        const imageUrl = await uploadFile(product.imageFile);
        setProduct({ ...product, imageUrl });
      }

      const createdProduct = await createProduct(product);

      onSubmit(createdProduct);
    } catch (error) {
      console.error("Error al crear el producto:", error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Descripción:
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Precio:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Categoría:
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Imagen:
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>

      <label>
        Stock:
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
