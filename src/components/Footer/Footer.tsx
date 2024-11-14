import React from "react";
import { useState } from "react";

import TaskFilter from "../TasksFilter/TaskFilter";

interface TabsTypes {
  id: string,
  name: string,
  selected: boolean
}
interface PropTypes  {
  counter: number
  onTabChange: (id: string) => void
}

const Footer: React.FC<PropTypes> = ({counter, onTabChange}) => {

  const [tabs, setTabs] = useState<TabsTypes[]>([
    { id: 'all', name: 'Все', selected: true },
    { id: 'active', name: 'Активные', selected: false },
    { id: 'complete', name: 'Готово', selected: false },
  ])

  const changeTab = (id: string) => {
    const updatedTabsList = tabs.map((tab) =>
      tab.id === id ? { ...tab, selected: true } : { ...tab, selected: false }
    );
    setTabs(updatedTabsList)
    onTabChange(id);
  }

  return (
    <footer className="footer">
      <span className="todo-count">{`Осталось: ${counter}`}</span>
      <ul className="filters">
        {tabs.map((tab) => (
          <TaskFilter 
          key={tab.id} 
          tab={tab} 
          onSelectTab={() => changeTab(tab.id)}/>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;