import React, { Component } from "react";
import styles from "./App.css";

import { AddButton } from "../AddButton/AddButton";
import { Header } from "../Header/Header";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <div className={styles.AppBody}>
          <AddButton />
        </div>
      </div>
    );
  }
}

export default App;
