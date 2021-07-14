import React from "react";
import styles from "./Projects.module.css";

function ProjectTile(props) {
  return (
    <div class={styles["project-tile"]}>
      <img
        src={props.image}
        alt="koala"
        width="100%"
        class="project-tile-img"
      />
      <p>
        <a href="https://abiram902.github.io/guestRoomBookingApp/" target="_blank">
          {props.title}
        </a>
      </p>
      <p className={styles.desc}>a room booking app with redux as a app level state management and with two type of user management and form, date, validation functionality</p>
    </div>
  );
}

export default ProjectTile;
