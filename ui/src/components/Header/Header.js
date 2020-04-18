import React from "react";
import styles from "./Header.css";

import { HeaderItem } from "../HeaderItem/HeaderItem";

export const Header = props => (
  <header className={styles.Header}>
    <div className={styles.Group}>
      <HeaderItem title="Create" />
      <HeaderItem title="List" />
    </div>
    <h1 className={styles.Title}>Schmungo</h1>
    <div className={styles.Group}>
      <HeaderItem title="Sign Up" onClick={props.registerClick} />
      <HeaderItem title="Log In" />
    </div>
  </header>
);