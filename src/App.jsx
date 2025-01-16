import Favorites from './pages/Favorites'
import Home from "./pages/Home"
import Login from './pages/Login'
import { Routes, Route, Navigate  } from "react-router-dom"
import NavBar from "./components/NavBar"
import { useAuth } from "./contexts/AuthContext.jsx";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div>
        <NavBar></NavBar>
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/favorites"
              element={isLoggedIn ? <Favorites></Favorites> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
