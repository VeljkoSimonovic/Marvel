import React from "react";
import "./style.scss";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="headerDiv">
      <h1>Marvel Heroes</h1>

      <Search />
    </header>
  );
};

export default Header;
