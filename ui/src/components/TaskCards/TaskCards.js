import axios from "axios";
import React , { Component } from "react";
import styles from "./TaskCards.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TaskActions from "../../actions/task";

import { TaskCard } from "../TaskCard/TaskCard";

class ConnectedTaskCards extends Component {
  state = {
    tasks: []
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.user) {
        axios.get(`http://localhost:5000/task/user/${nextProps.user.id}`)
          .then(res => {
            this.setState({
              tasks: res.data
            })
          })
          .catch(err => {
            console.error("error fetching tasks: ", err);
          });
      } else {
        this.setState({
          tasks: []
        })
      }
      this.props.action.tasksUpdated();
    }
  }

  render() {
    return (
      <div className={styles.TaskCards}>
        {console.log("props: ", this.props)}
        {this.state.tasks.map(task => (
          <TaskCard key={task.id} title={task.title}>
            {task.description}
          </TaskCard>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps state: ", state)
  return {
    tasksUpdated: state.task.tasksUpdated,
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(TaskActions, dispatch)
})

export const TaskCards = connect(mapStateToProps, mapDispatchToProps)(ConnectedTaskCards);