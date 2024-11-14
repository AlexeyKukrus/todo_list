import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";

import { TaskListItem } from "../../types/types";
import styles from './Task.module.scss';

interface PropTypes {
  task: TaskListItem;
  onChangeTaskStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, name: string) => void;
}

const Task: React.FC<PropTypes> = ({ task, onChangeTaskStatus, onDeleteTask, onEditTask }) => {
  const dateTime = formatDistanceToNow(new Date(task.time), { addSuffix: true });
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEditTask(task.id, taskName); 
      setIsEditing(false); 
    }
  };

  const renderTaskVision = () => {
    if (isEditing) {
      return (
        <input
          className="new-todo"
          onChange={handleChange}
          onKeyDown={handleSubmit}
          value={taskName}
        />
      );
    } else {
      return (
        <>
          <input
            className="toggle"
            type="checkbox"
            checked={task.status === "completed"}
            onChange={() => onChangeTaskStatus(task.id)}
          />
          <label>
            <span className="description">{taskName}</span>
            <span className="created">{dateTime}</span>
          </label>
        </>
      );
    }
  };

  return (
    <li key={task.id} className={task.status}>
      <div className="view">
        {renderTaskVision()}
        <button 
          className="icon icon-edit"
          onClick={handleEditTask}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDeleteTask(task.id)}
        ></button>
      </div>
    </li>
  );
};

export default Task;
