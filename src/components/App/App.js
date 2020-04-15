import React, { Component } from 'react';
import styles from './App.css';

import { Header } from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <p className={styles.AppBody}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
