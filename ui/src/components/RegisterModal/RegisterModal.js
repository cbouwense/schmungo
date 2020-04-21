import axios from "axios";
import moment from "moment-timezone";
import React, { Component } from "react";
import styles from "./RegisterModal.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../../actions/user";

import { Modal } from "../Modal/Modal";
import { SaveButton } from "../SaveButton/SaveButton";

class ConnectedRegisterModal extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  }
  
  handleSubmit = () => {
    const timezone = moment.tz.guess();
    const datetime = moment().format("YYYY-MM-DD HH:mm:ss")
    const createdAt = moment.tz(datetime, timezone).format()
    
    console.log("createdAt: ", createdAt)

    axios.post("http://localhost:5000/user", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      time_created: createdAt
    }).then(res => {
      axios.post("http://localhost:5000/login", {
        name: this.state.name,
        password: this.state.password
      }).then(res => {
        this.props.action.userLogin(res.data)
      }).catch(err => {
        console.log("error: ", err);
      })
      this.setState({
        name: "",
        email: "",
        password: ""
      })
      this.props.close();
    }).catch(err => {
      console.log("error: ", err);
    })
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
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
        <h1 className={styles.Heading}>Email</h1>
        <input
          className={styles.Input}
          type="text"
          onChange={this.handleEmailChange}
          value={this.state.email}
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
})

export const RegisterModal = connect(null, mapDispatchToProps)(ConnectedRegisterModal);