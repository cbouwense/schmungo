import React from "react";
import styles from "./AddButton.css";

export const AddButton = props => (
  <button className={styles.AddButton} onClick={props.onClick}>
    <p className={styles.ButtonText}>+</p>
  </button>
);