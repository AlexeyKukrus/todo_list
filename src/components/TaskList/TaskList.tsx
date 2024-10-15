import React from "react";

import Task from "../Task/Task";

import { TaskListItem } from "../../types/types";

import styles from './TaskList.module.scss';

interface PropTypes {
  tasks: TaskListItem[]
}

const TaskList: React.FC<PropTypes> = ({ tasks }) => {
  const getTask: JSX.Element[] = tasks.map((task: TaskListItem) => (
    <Task key={task.id} task={task} />
  ))

  return (
    <ul className="todo-list">{getTask}</ul>
  );
};

export default TaskList;
