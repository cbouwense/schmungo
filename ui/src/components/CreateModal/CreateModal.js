import axios from "axios";
import moment from "moment-timezone";
import React, { Component } from "react";
import styles from "./CreateModal.css";

import { SaveButton } from "../SaveButton/SaveButton";

export class CreateModal extends Component {

  state = {
    title: "",
    description: ""
  }

  handleSubmit = () => {
    const timezone = moment.tz.guess();
    const datetime = moment().format("YYYY-MM-DD HH:mm:ss")
    const createdAt = moment.tz(datetime, timezone).format()
    
    axios.post("http://localhost:5000/task", {
      title: this.state.title,
      description: this.state.description,
      time_created: createdAt,
      // TODO: grab this from redux
      user_id: 1
    })
    .then(res => {
      console.log("successful!");
      console.log(res);
    })
    .catch(err => {
      console.log("error: ", err);
    })
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    const saveButtonEnabled = this.state.title.length > 0 && 
      this.state.description.length > 0;

    return this.props.open ? (
      <div className={styles.ModalContainer}>
        <div className={styles.Backdrop} onClick={this.props.close}></div>
        <div className={styles.CreateModal}>
          <div className={styles.ExitContainer}>
            <button
              className={styles.Exit}
              onClick={this.props.close}
            >
              X
            </button>
          </div>
          <h1 className={styles.Heading}>Title</h1>
          <input 
            className={styles.TitleInput}
            type="text"
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
          <h1 className={styles.Heading}>Description</h1>
          <textarea 
            className={styles.DescriptionInput}
            onChange={this.handleDescriptionChange}
            value={this.state.description}
          />
          <SaveButton 
            enabled={saveButtonEnabled} 
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
     ) : null
  }
}
