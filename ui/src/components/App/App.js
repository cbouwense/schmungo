import axios from "axios";
import React, { Component } from "react";
import styles from "./App.css";

import { AddButton } from "../AddButton/AddButton";
import { CreateModal } from "../CreateModal/CreateModal";
import { Header } from "../Header/Header";
import { TaskCards } from "../TaskCards/TaskCards";

class App extends Component {
  state = {
    createModalOpen: false,
    fetchingTasks: true,
    tasks: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/task")
      .then(res => {
        console.log("data: ", res.data)
        this.setState({
          tasks: res.data
        })
      })
      .catch(err => {
        console.error("error fetching tasks: ", err);
      });
    this.setState({
      fetchingTasks: false
    })
  }

  handleCreateOpen = () => {
    this.setState({
      createModalOpen: true
    })
  }
  
  handleCreateClose = () => {
    this.setState({
      createModalOpen: false
    })
  }

  render() {
    return (
      <div className={styles.App}>
        <CreateModal 
          close={this.handleCreateClose}
          open={this.state.createModalOpen} 
        />
        <Header />
        <div className={styles.AppBody}>
          <AddButton onClick={this.handleCreateOpen} />
          <TaskCards tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
