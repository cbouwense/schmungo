import React from "react";
import styles from "./TaskCard.css";

export const TaskCard = props => (
  <div className={styles.TaskCard}>
    <div className={styles.TaskCardTitle}>
      {props.title}
    </div>
    <div className={styles.TaskCardDescription}>
      {props.children} 
    </div>
  </div>
);