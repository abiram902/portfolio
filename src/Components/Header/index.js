import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <nav id={styles["navbar"]}>
      <ul>
        <li>
          <a href={styles["#welcome-section"]}>
            <Link to="welcome" smooth={true}>
              About
            </Link>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#projects">
            <Link to="projects" smooth={true}>
              MyWork
            </Link>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#contact">
            <Link to="contact" smooth={true}>
              Contact
            </Link>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
