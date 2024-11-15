import React from 'react';

import Task from '../Task/Task';

import { TaskListItem } from '../../types/types';

interface PropTypes {
  tasks: TaskListItem[];
  onChangeTaskStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, name: string) => void;
}

const TaskList: React.FC<PropTypes> = ({
  tasks,
  onChangeTaskStatus,
  onDeleteTask,
  onEditTask,
}) => {
  const getTask: JSX.Element[] = tasks.map((task: TaskListItem) => (
    <Task
      key={task.id}
      task={task}
      onChangeTaskStatus={onChangeTaskStatus}
      onDeleteTask={onDeleteTask}
      onEditTask={onEditTask}
    />
  ));

  return <ul className="todo-list">{getTask}</ul>;
};

export default TaskList;
