import React from "react";
import styles from "./TaskCards.css";
import { connect } from "react-redux";

import { TaskCard } from "../TaskCard/TaskCard";

const ConnectedTaskCards = props => (
  <div className={styles.TaskCards}>
    {props.tasks
      .filter(task => task.user_id === props.user.id)
      .map(task => (
        <TaskCard key={task.id} title={task.title}>
          {task.description}
        </TaskCard>
      ))
    }
  </div>
);

const mapStateToProps = (state) => ({
  // TODO
  //user: state.user
  // HACK
  user: { id: 1 }
});

export const TaskCards = connect(mapStateToProps)(ConnectedTaskCards);