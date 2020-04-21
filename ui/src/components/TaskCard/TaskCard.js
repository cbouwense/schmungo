import React from "react";
import styles from "./TaskCard.css";

import trash from "../../images/trash.png";

export const TaskCard = props => (
  <div className={styles.TaskCard}>
    <img className={styles.TaskCardDelete} alt="delete icon" src={trash} />
    <div className={styles.TaskCardContent}>
      <h3 className={styles.TaskCardTitle}>
        {props.title}
      </h3>
      <div className={styles.TaskCardDescription}>
        {props.children} 
      </div>
    </div>
  </div>
);