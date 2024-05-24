import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import "./Burger.css";
import { Link } from "react-router-dom";
// import { headerContent } from "../constants/constants";

const Burger = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  function handleClickBurger() {
    setActiveBurger(!activeBurger);
  }

  return (
    <nav className="header__navigation">
      <ul
        className={`header__lists ${
          activeBurger ? "header__lists_active " : ""
        }`}
      >
            <li className="header__links ">
 
           <p className="header__links-item">Режим работы:</p>
           <p className="header__links-item">пн-сб: с 8 до 20:00 без обеда</p>
            </li>
            <li className="header__links ">
           <p className="header__links-item">Адрес:</p>
           <Link to="https://go.2gis.com/diwcy" className="header__links-item" target="_blank" rel="noopener noreferrer">
    ул. Челюскинцев, 113
  </Link>
            </li>
          </ul>
      <div
        className={`header__overlay ${
          activeBurger ? "header__overlay-active" : ""
        }`}
      ></div>
      <div
        onClick={handleClickBurger}
        className={`burger header__button${
          activeBurger ? " burger_active" : ""
        }`}
      >
        <div
          className={`burger-line ${activeBurger ? " burger-first-line" : ""}`}
        ></div>
        <div
          className={`burger-line ${activeBurger ? " burger-second-line" : ""}`}
        ></div>
        <div
          className={`burger-line ${activeBurger ? " burger-third-line" : ""}`}
        ></div>
      </div>
    </nav>
  );
};

export default Burger;
