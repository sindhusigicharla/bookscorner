import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ProductsList from "../../components/ProductsList";
function Home() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem("uid") || ""
  );

  const [products, setProducts] = useState([]);

  const logoutUser = () => {
    localStorage.setItem("uid", "");
    setIsUserLoggedIn(false);
  };

  const fetchProducts = async () => {
    const p = await fetch("http://localhost:4000/products");
    const productsData = await p.json();
    return productsData;
  };

  useEffect(() => {
    // fetchProducts is async — await it before setting state
    (async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    })();
  }, []);
  return (
    <div>
      <div className="navbar">
        <div className="home-container">
          <div className="logo">
            <h2>BC</h2>
          </div>
          <div className="name">
            <h1>Books Corner</h1>
          </div>
        </div>
        <div className="login-register">
          {!isUserLoggedIn ? (
            <>
              <Link to="/login">
                <button className="login">Login</button>
              </Link>
              <Link to="/registration">
                <button className="register">Register</button>
              </Link>
            </>
          ) : (
            <>
              <button className="logout" onClick={() => logoutUser()}>
                Logout
              </button>
              <Link to="/cart">
                <button className="register">Cart</button>
              </Link>
            </>
          )}
        </div>
      </div>
      <ProductsList products={products} />
    </div>
  );
}
export default Home;
