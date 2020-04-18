import React from "react";
import styles from "./HeaderItem.css";

export const HeaderItem = props => (
  <h2 
    className={styles.HeaderItem}
    onClick={props.onClick}
  >
    {props.title}
  </h2>
);