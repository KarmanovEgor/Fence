import React, { useState } from "react";
import Burger from "../Burger/Burger";
import "./Header.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header({openPopup}) {
  const [activeBurger, setActiveBurger] = useState(false);



  function handleClickBurger() {
    setActiveBurger(!activeBurger);
  }

  

  return (
    <header
      className={`header page__header ${activeBurger ? "header_active" : ""} `}
    >
      <div className="header__container">
        <Link to={"/"} className="header__link-home logo"></Link>

        <Link to={"/"} className="header__links">Забор у дома</Link>
        <button className="header__button-click" type="button" name="calling" onClick={openPopup}>НАПИШИТЕ НАМ!</button>
        <>
          <Burger
            activeBurger={activeBurger}
            handleClickBurger={handleClickBurger}
          />
        </>

      </div>
    </header>
  );
}