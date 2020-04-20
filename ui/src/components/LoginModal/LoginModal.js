import axios from "axios";
import React, { Component } from "react";
import styles from "./LoginModal.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserActions from "../../actions/user";

import { Modal } from "../Modal/Modal";
import { SaveButton } from "../SaveButton/SaveButton";

class ConnectedLoginModal extends Component {
  state = {
    name: "",
    password: ""
  }
  
  handleSubmit = () => {    
    axios.post("http://localhost:5000/login", {
      name: this.state.name,
      password: this.state.password,
    })
    .then(res => {
      console.log("successful!");
      console.log(res);
      this.props.action.userLogin(res.data)
      this.props.close();
    })
    .catch(err => {
      console.log("error: ", err);
    })
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const saveButtonEnabled = this.state.name.length > 0 && 
      this.state.password.length > 0;
    
    return (
      <Modal open={this.props.open} close={this.props.close}>
        <h1 className={styles.Heading}>Name</h1>
        <input 
          className={styles.Input}
          type="text"
          onChange={this.handleNameChange}
          value={this.state.name}
        />
        <h1 className={styles.Heading}>Password</h1>
        <input
          className={styles.Input}
          type="password"
          onChange={this.handlePasswordChange}
          value={this.state.password}
        />
        <SaveButton 
          enabled={saveButtonEnabled} 
          handleSubmit={this.handleSubmit}
        />
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(UserActions, dispatch)
});

export const LoginModal = connect(null, mapDispatchToProps)(ConnectedLoginModal)