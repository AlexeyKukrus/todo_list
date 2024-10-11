import React from "react";

import styles from './TaskFilter.module.scss'

interface PropTypes {
  tab: {
    id: string;
    name: string;
    selected: boolean;
  };
}

const TaskFilter: React.FC<PropTypes> = ({ tab }) => {
  return (
    <li key={tab.id}>
      <button className="selected">{tab.name}</button>
    </li>
  )
}

export default TaskFilter