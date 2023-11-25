import { useState } from "react";

import ProductForm from "../components/ProductForm";

const AddProduct = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmitProduct = async () => {
    setSuccessMessage("Producto agregado con éxito");
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <ProductForm onSubmit={handleSubmitProduct} />
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
};

export default AddProduct;
