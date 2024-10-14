import React from "react";

import Task from "../Task/Task";

import styles from './TaskList.module.scss';

interface TaskItem {
  id: string,
  name: string,
  status: string,
  time: string,
}

const TaskList: React.FC = () => {
  const tasks: TaskItem[] = [
    { id:'1', name: 'Задача 1', status: 'completed', time:'2024-10-10T10:00:00Z'},
    { id:'2', name: 'Задача 2', status: '', time: '2024-09-09T10:00:00Z'},
    { id:'3', name: 'Задача 3', status: '', time: '2023-01-11T10:00:00Z'}
  ]
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </ul>    
  );
};

export default TaskList;