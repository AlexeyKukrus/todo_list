import React from "react";
import { useState } from "react";

import TaskFilter from "../TasksFilter/TaskFilter";

interface TabsTypes {
  id: string,
  name: string,
}
interface PropTypes  {
  counter: number,
  activeTab: string,
  onTabChange: (id: string) => void
}

const Footer: React.FC<PropTypes> = ({counter, activeTab, onTabChange}) => {

  const [tabs, setTabs] = useState<TabsTypes[]>([
    { id: 'all', name: 'Все'},
    { id: 'active', name: 'Активные'},
    { id: 'complete', name: 'Готово'},
  ])

  return (
    <footer className="footer">
      <span className="todo-count">{`Осталось: ${counter}`}</span>
      <ul className="filters">
        {tabs.map((tab) => (
          <TaskFilter 
            key={tab.id} 
            tab={tab} 
            selected={activeTab === tab.id}
            onSelectTab={() => onTabChange(tab.id)}
          />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;