import React from "react";
import { formatDistanceToNow } from "date-fns";

import { TaskListItem } from "../../types/types";

import styles from './Task.module.scss'

interface PropTypes {
  task: TaskListItem
}

const Task: React.FC<PropTypes> = ({ task }) => {
  const dateTime = formatDistanceToNow(new Date(task.time), { addSuffix: true })
  return (
    <li key={task.id} className={task.status}>
        <div className="view">
          <input className="toggle" type="checkbox"></input>
          <label>
            <span className="description">{task.name}</span>
            <span className="created">{dateTime}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
  );
};

export default Task;