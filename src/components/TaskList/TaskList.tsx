import React from "react";

import Task from "../Task/Task";

import { TaskListItem } from "../../types/types";

import styles from './TaskList.module.scss';

interface PropTypes {
  taskList: TaskListItem[]
  onChangeTaskStatus: (id:string) => void
  onDeleteTask: (id:string) => void
}

const TaskList: React.FC<PropTypes> = ({ taskList, onChangeTaskStatus, onDeleteTask }) => {
  const getTask: JSX.Element[] = taskList.map((task: TaskListItem) => (
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
