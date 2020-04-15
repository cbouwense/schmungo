import React, { Component } from "react";
import styles from "./App.css";

import { AddButton } from "../AddButton/AddButton";
import { Header } from "../Header/Header";
import { TaskCard } from "../TaskCard/TaskCard";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <div className={styles.AppBody}>
          <AddButton />
          <TaskCard title="Walk Dog">
            Fido needs to be taken for a walk.
          </TaskCard>
          <TaskCard title="Do Dishes">
            I haven't done the dishes in a week they really need to get done
            Chris will be mad if I don't do them eventually.
          </TaskCard>
          <TaskCard title="Make App">
            I need to make this todo app to keep my skills up and boost
            my confidence with React and just front end dev in general.
          </TaskCard>
        </div>
      </div>
    );
  }
}

export default App;
