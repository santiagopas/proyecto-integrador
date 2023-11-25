import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import "../styles/ProductCard.css";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  console.log(products);

  return (
    <>
      {products.map((product) => (
        <article className="product-card" key={product._id}>
          <figure>
            <img src={product.imageUrl} alt={product.name} />
          </figure>
          <header>
            <h2>{product.name}</h2>
          </header>
          <h3>{product.price}</h3>
          <p>{product.description}</p>
        </article>
      ))}
    </>
  );
};

export default ProductCard;
