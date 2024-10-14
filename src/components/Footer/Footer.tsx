import React from "react";

import TaskFilter from "../TasksFilter/TaskFilter";

interface TabsTypes {
  id: string,
  name: string,
  selected: boolean
}

const Footer: React.FC = () => {
  const tabs: TabsTypes[] = [
    { id: '1', name: 'Все', selected: true },
    { id: '2', name: 'Активные', selected: false },
    { id: '3', name: 'Готово', selected: false },
  ]

  return (
    <footer className="footer">
      <span className="todo-count">1 Выполнено</span>
      <ul className="filters">
        {tabs.map((tab) => (
          <TaskFilter key={tab.id} tab={tab} />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;