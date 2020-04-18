import React from "react";
import styles from "./TaskCards.css";

import { TaskCard } from "../TaskCard/TaskCard";

export const TaskCards = props => (
  <div className={styles.TaskCards}>
    {props.tasks.map(task => (
      <TaskCard title={task.title}>
        {task.description}
      </TaskCard>
    ))}
  </div>
);