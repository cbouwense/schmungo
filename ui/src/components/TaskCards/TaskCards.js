import axios from "axios";
import React , { Component } from "react";
import styles from "./TaskCards.css";
import { connect } from "react-redux";

import { TaskCard } from "../TaskCard/TaskCard";

class ConnectedTaskCards extends Component {
  state = {
    tasks: []
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props && nextProps.user) {
      console.log("nextProps: ", nextProps)
      axios.get(`http://localhost:5000/task/user/${nextProps.user.id}`)
        .then(res => {
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
    user: state.user.user
  }
}

export const TaskCards = connect(mapStateToProps)(ConnectedTaskCards);