import ProductCard from "../components/ProductCard"
import { useState, useEffect } from "react"
import '../css/Home.css'
import getProductsAsync from "../services/api.js"


function Home() {

  const [searchQuery, setSearchQuery] = useState("")

  const [products, setProducts] = useState([])
  const [showAll, setShowAll] = useState(false);
  const handleShowMore = () => { setShowAll(true); 
  }  
  // const [error, setError] = UseState(null)
  //const [loading, setLoading] = useState(true)

  useEffect(() => {
    const search = async () => {
      try {
        const productsList = await getProductsAsync()
        setProducts(productsList);
      }
      catch (err) {
        console.log(err);
        setError("failed to load ")
      }
      finally {
        // setLoading(false)
      }
    }
    search()
  }, [])


  const handleSearch = () => {
    e.preventDefault()
  }
  const filteredProducts = products
  .filter(product => product.title.toLowerCase().startsWith(searchQuery)) 
  .slice(0, showAll ? products.length : 20);

  return <div className="home">
    <div onSubmit={handleSearch} className="search-box">
      <input
        type="text"
        placeholder="Search...."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}>
      </input>
      <button type="submit" className="search-button">Search</button>
      <button type="submit" className="clear-button">Clear</button>

    </div>
    <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    {!showAll && products.length > 20 && (
    <div className="show-more-btn" onClick={handleShowMore}>show more</div>)}
  </div>
}

export default Home