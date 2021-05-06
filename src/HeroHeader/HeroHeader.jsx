import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerDiv1">
      <h1 className="logo">Marvel Heroes</h1>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 className="homePage">Homepage</h1>
      </Link>
    </header>
  );
};

export default Header;
