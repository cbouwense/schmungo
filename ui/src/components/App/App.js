import React, { Component } from "react";
import styles from "./App.css";

import { AddButton } from "../AddButton/AddButton";
import { CreateModal } from "../CreateModal/CreateModal";
import { Header } from "../Header/Header";
import { RegisterModal } from "../RegisterModal/RegisterModal";
import { TaskCards } from "../TaskCards/TaskCards";
import { LoginModal } from "../LoginModal/LoginModal";

class App extends Component {
  state = {
    createModalOpen: false,
    fetchingTasks: true,
    loginModalOpen: false,
    registerModalOpen: false,
    tasks: []
  };

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

  handleRegisterOpen = () => {
    this.setState({
      registerModalOpen: true
    })
  }
  
  handleRegisterClose = () => {
    this.setState({
      registerModalOpen: false
    })
  }

  handleLoginOpen = () => {
    this.setState({
      loginModalOpen: true
    })
  }
  
  handleLoginClose = () => {
    this.setState({
      loginModalOpen: false
    })
  }

  render() {
    return (
      <div className={styles.App}>
        <CreateModal 
          close={this.handleCreateClose}
          open={this.state.createModalOpen} 
        />
        <LoginModal
          close={this.handleLoginClose}
          open={this.state.loginModalOpen}
        />
        <RegisterModal
          close={this.handleRegisterClose}
          open={this.state.registerModalOpen}
        />
        <Header registerClick={this.handleRegisterOpen} loginClick={this.handleLoginOpen} />
        <div className={styles.AppBody}>
          <AddButton onClick={this.handleCreateOpen} />
          <TaskCards />
        </div>
      </div>
    );
  }
}

export default App;
