import React, { useState, useEffect } from "react";
import "../css/Favorite.css";
import ProductCard from "../components/ProductCard";
import getProductsAsync from "../services/api.js";

function Favorites() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const favoritesIds = JSON.parse(localStorage.getItem("favorites")) || [];
      const productsList = await getProductsAsync();
      setProducts(productsList);
      setFavorites(favoritesIds);
    }
    fetchData();
  }, []); 

  if (favorites.length === 0) {
    return (
      <div className="favorite-empty">
        <h2>No favourite products</h2>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="product-list">
        {products
          .filter((product) => favorites.includes(product.id))
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
