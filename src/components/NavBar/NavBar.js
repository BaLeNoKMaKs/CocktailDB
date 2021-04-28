import React from "react";
import "./NavBar.scss";

import links from "./NavBarDB";

import { Link } from "react-router-dom";

export default function NavBar() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <header className={isActive ? "header _active" : "header"}>
      <div className="header__content _container">
        <Link to="/" className="header__logo">
          The<span>Cocktail</span>DB
        </Link>
        <nav
          className={
            isActive
              ? "header__menu menu__body _active"
              : "header__menu menu__body"
          }
        >
          <ul className="header__menu-list">
            {links.map((element) => {
              return (
                <li key={element.id}>
                  <Link
                    to={element.link}
                    className="header__menu-link"
                    onClick={() => setIsActive(false)}
                  >
                    {element.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={isActive ? "icon-menu _active" : "icon-menu"}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
