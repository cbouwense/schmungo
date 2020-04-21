import React from "react";
import styles from "./AddButton.css";

import plus from "../../images/plus.png";

export const AddButton = props => (
  <button className={styles.AddButton} onClick={props.onClick}>
    <img className={styles.ButtonImage} alt="plus sign for add task button" src={plus} />
  </button>
);