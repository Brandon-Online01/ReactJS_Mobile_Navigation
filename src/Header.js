import React from "react";
import Navigation from "./Navigation";
import "./App.css";
import Logo from "./main.png";

const Header = () => {
  return (
    <header className="header">
      <img className="mainLogo" src={Logo} alt="Minestar Logo" />
      <Navigation />
    </header>
  );
};

export default Header;
