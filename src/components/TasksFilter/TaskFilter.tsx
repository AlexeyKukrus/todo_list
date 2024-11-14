import React from "react";

import styles from './TaskFilter.module.scss'

interface PropTypes {
  tab: {
    id: string;
    name: string;
  },
  selected: boolean
  onSelectTab: (id: string) => void
}

const TaskFilter: React.FC<PropTypes> = ({ tab, selected, onSelectTab }) => {
  let tabState = selected ? 'selected' : ''

  return (
    <li key={tab.id}>
      <button 
        className={tabState}
        onClick={() => onSelectTab(tab.id)}
      >{tab.name}</button>
    </li>
  )
}

export default TaskFilter