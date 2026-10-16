import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  return (
    <div className="admin-page">

      {/* App Name */}
      <div className="admin-header">
        <h1>MyShopping App</h1>
      </div>

      <div className="admin-info">
        <h2>Welcome, Admin</h2>
      </div>

      <nav className="admin-navbar">

        <button>Home</button>
        <button>Products</button>
        <button>Orders</button>
        <button>Users</button>

        <button
          className="admin-logout"
          onClick={logout}
        >
          Logout
        </button>

      </nav>

        </div>
  );
};

export default AdminLayout;