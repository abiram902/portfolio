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
        <a href={props.link} target="_blank">
          {props.title}
        </a>
      </p>
      <p className={styles.desc}>{props.desc}</p>
    </div>
  );
}

export default ProjectTile;
