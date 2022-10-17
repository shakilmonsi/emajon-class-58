import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthConText } from "../UserConTect";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthConText);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">LOgin</Link>
        <Link to="/signUp">SignUp</Link>
        <span>{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;
