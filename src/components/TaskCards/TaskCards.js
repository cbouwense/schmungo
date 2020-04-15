import React from "react";
import styles from "./TaskCards.css";

export const TaskCards = props => (
  <div className={styles.TaskCards}>
    {props.children}
  </div>
);