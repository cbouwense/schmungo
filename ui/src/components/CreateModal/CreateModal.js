import axios from "axios";
import moment from "moment-timezone";
import React, { Component } from "react";
import styles from "./CreateModal.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TaskActions from "../../actions/task";

import { Modal } from "../Modal/Modal";
import { SaveButton } from "../SaveButton/SaveButton";

class ConnectedCreateModal extends Component {
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
      user_id: this.props.user.id
    })
    .then(res => {
      console.log("successful!");
      console.log(res);
      this.props.action.tasksUpdating();
      this.setState({
        title: "",
        description: ""
      })
      this.props.close();
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
    
    return (
      <Modal open={this.props.open} close={this.props.close}>
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
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(TaskActions, dispatch)
})

export const CreateModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedCreateModal);