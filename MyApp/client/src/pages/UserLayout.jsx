import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../components/UserContext";
import "./UserLayout.css";
import { Link } from "react-router-dom";

const UserLayout = () => {

  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="user-page">
      <header className="app-header">
        <h1>MyShopping App</h1>
      </header>
      <div className="user-info">
        <h2>Welcome, {user.name} {user.role}</h2>
      </div>
      <nav className="navbar">
        <div className="nav-links">

          <Link to="/user">
            Home
          </Link>

          <Link to="/user/cart">
            My Cart
          </Link>

          <Link to="/user/orders">
            My Orders
          </Link>

          <button onClick={handleLogout}>
            Logout
          </button>

        </div>
      </nav>
      <div className="products">
        <h2>Products</h2>
        <div className="product-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}> Add to Cart </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;