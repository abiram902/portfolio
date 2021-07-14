import React from "react";
import styles from './Welcome.module.css';

function Welcome() {
  return (
    <section id={styles["welcome-section"]}>
      <h1>Hello, I am Abiram.</h1>
      <p>A self-tought React-js / front-end Developer,</p>
      <p style={{fontSize:'12px',marginTop:'-10px',}}>always fan of minimilistic design and i prefer functional components over class based components.</p>
    </section>
  );
}

export default Welcome;
