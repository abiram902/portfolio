import React from "react";
import "./Header.css";

function Header({ clickedItem, onClick }) {
  return (
    <nav id={"navbar"}>
      <ul
        onClick={() => onClick("About")}
        className={`nav__link ${
          clickedItem === "About" && "selected__nav__link"
        }`}
      >
        <li>About</li>
      </ul>
      <ul
        onClick={() => onClick("MyWork")}
        className={`nav__link ${
          clickedItem === "MyWork" && "selected__nav__link"
        }`}
      >
        <li>MyWork</li>
      </ul>
      <ul
        onClick={() => onClick("Contact")}
        className={`nav__link ${
          clickedItem === "Contact" && "selected__nav__link"
        }`}
      >
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
