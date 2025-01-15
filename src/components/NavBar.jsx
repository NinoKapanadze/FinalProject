import {Link} from "react-router-dom"
import '../css/NavBar.css'

function NavBar(){
  return <nav className ="navbar">
    <div className = "navbar-brand">
       <Link to ="/">Products App</Link>
    </div>
    <div className="navbar-links">
      <Link to= "/" className ="nav-link">Home</Link>
      <Link to= "/favorites" className ="nav-link">Favorites</Link>
      <Link to= "/login" className ="nav-link">Login</Link>


    </div>
  </nav>
}
export default NavBar