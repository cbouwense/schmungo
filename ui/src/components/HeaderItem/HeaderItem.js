import React from "react";
import styles from "./HeaderItem.css";

export const HeaderItem = (props) => (
  <h2 className={styles.HeaderItem}>{props.title}</h2>
);