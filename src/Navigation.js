import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "./main.png";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  let menuMask;

  if (showMenu) {
    menu = (
      <div className="menuDiv">
        <nav>
          <img className="mobileLogo" src={Logo} alt="Minestar Logo" />
          <ul>
            <li>About Us</li>
            <li>Shop</li>
            <li>Contact Us</li>
            <li className="usertabs">
              <FontAwesomeIcon
                className="pr-3"
                icon={faCartShopping}
                onClick={() => setShowMenu(!showMenu)}
              />
              <a href="/">Cart</a>
            </li>
            <li className="usertabs">
              <FontAwesomeIcon
                icon={faUser}
                onClick={() => setShowMenu(!showMenu)}
              />
              <a href="/">My Account</a>
            </li>
          </ul>
        </nav>
      </div>
    );
    menuMask = (
      <div className="menuMask" onClick={() => setShowMenu(false)}></div>
    );
  }

  return (
    <nav>
      <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      {menuMask}
      {menu}
    </nav>
  );
};

export default Navigation;
