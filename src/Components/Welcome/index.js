import React from "react";
import styles from './Welcome.module.css';

function Welcome() {
  return (
    <section id={styles["welcome-section"]}>
      <h1>Hello, I am Abiram.</h1>
      <p>A self-tought React-js / front-end Developer</p>
    </section>
  );
}

export default Welcome;
