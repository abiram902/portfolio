import React from "react";
import styles from "./Contact.module.css";
import Profile from "./Profile";
import pen from "../../assets/pen.svg";
import github from "../../assets/github.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg"

function Contact() {
  return (
    <section id={styles["contact"]}>
      <h1>contact me</h1>
      <div className={styles.profileLink}>
        <Profile
          link={"https://github.com/abiram902"}
          icon={github}
          name="My gitHub"
        />
        <Profile
          link={"https://codepen.io/abiram902/"}
          icon={pen}
          name="My Code Pen"
        />

        <Profile
          link={"#"}
          icon={mail}
          name="Gmail"
        />
        <Profile
          link={"#"}
          icon={phone}
          name="phone - +91 9790440471"
        />
      </div>
    </section>
  );
}

export default Contact;
