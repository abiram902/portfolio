import React from "react";
import styles from "./Contact.module.css";

function Profile(props) {
  return (
    <React.Fragment>
      <p className={styles.eachlink}>
        <a id="profile-link" style={{pointerEvents: props.link === '#' && "none"}} href={props.link} target="_blank">
          <img src={props.icon} alt={"imageses"} className={styles.svg} />
          {props.name}
        </a>
      </p>
    </React.Fragment>
  );
}

export default Profile;
