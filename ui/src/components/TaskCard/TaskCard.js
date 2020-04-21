import axios from "axios";
import React from "react";
import styles from "./TaskCard.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TaskActions from "../../actions/task";

import edit from "../../images/edit.png";
import trash from "../../images/trash.png";

const ConnectedTaskCard = props => (
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
      onClick={() => deleteTask(props.id, props.action)} 
    />
    <div className={styles.TaskCardContent}>
      <h3 className={styles.TaskCardTitle}>
        {props.title}
      </h3>
      <div className={styles.TaskCardDescription}>
        {props.children} 
      </div>
    </div>
  </div>
);

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