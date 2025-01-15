import '../css/ProductCard.css'
import heart from "../assets/heart.png"



function ProductCard({ product }) {

  function onFavourite(id, title) 
  {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert(`${title} added to basket!`);   
  }

  return <div className="product-card">
    <div className="product-image">
      <img className="product-thumb" src={product.thumbnail} alt={product.title} />
      <button className="heart-btn" onClick={() => onFavourite(product.id, product.title)} ><img src={heart} alt="heart" /></button>
    </div>
    <div className="product-info">
      <h2 className="product-name">{product.title}</h2>
      <span className="product-price">$${product.price}</span>

    </div>
  </div>
}

export default ProductCard;