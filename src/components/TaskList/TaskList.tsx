import React from "react";

import Task from "../Task/Task";

import { TaskListItem } from "../../types/types";

import styles from './TaskList.module.scss';

interface PropTypes {
  tasks: TaskListItem[]
  onChangeTaskStatus: (id:string) => void
  onDeleteTask: (id:string) => void
}

const TaskList: React.FC<PropTypes> = ({ tasks, onChangeTaskStatus, onDeleteTask }) => {
  const getTask: JSX.Element[] = tasks.map((task: TaskListItem) => (
    <Task 
      key={task.id} 
      task={task} 
      onChangeTaskStatus={onChangeTaskStatus}
      onDeleteTask={onDeleteTask}
    />
  ))

  return (
    <ul className="todo-list">{getTask}</ul>
  );
};

export default TaskList;
