import axios from "axios";
import React, { Component } from "react";
import styles from "./TaskCard.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TaskActions from "../../actions/task";

import edit from "../../images/edit.png";
import trash from "../../images/trash.png";
import { Aux } from "../../hoc/Aux/Aux";
import { EditModal } from "../EditModal/EditModal";

class ConnectedTaskCard extends Component {
  state = {
    editModalOpen: false
  }

  handleEditOpen = () => {
    this.setState({
      editModalOpen: true
    })
  }

  handleEditClose = () => {
    this.setState({
      editModalOpen: false
    })
  }

  render() {
    return (
      <Aux>
        <EditModal  
          id={this.props.id}
          open={this.state.editModalOpen}
          close={this.handleEditClose}
        />
        <div className={styles.TaskCard}>
          <img
            className={styles.TaskCardEdit}
            alt="edit icon"
            src={edit}
            onClick={this.handleEditOpen}
          />
          <img 
            className={styles.TaskCardDelete} 
            alt="delete icon" 
            src={trash} 
            onClick={() => deleteTask(this.props.id, this.props.action)} 
          />
          <div className={styles.TaskCardContent}>
            <h3 className={styles.TaskCardTitle}>
              {this.props.title}
            </h3>
            <div className={styles.TaskCardDescription}>
              {this.props.children} 
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

const deleteTask = (id, action) => {
  axios.delete(`http://localhost:5000/task/${id}`)
    .then(res => {
      console.log("res: ", res.data)
      action.tasksUpdating();
    })
    .catch(err => {
      console.log(`error deleting task ${id}: `, err)
    })
}

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(TaskActions, dispatch)
});

export const TaskCard = connect(null, mapDispatchToProps)(ConnectedTaskCard);