import React, { useState } from 'react'

import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

import { TaskListItem } from './types/types';

const App: React.FC = () => {
  const [task, setTask] = useState<TaskListItem[]>([])
  
  return (
    <section className="todoapp">
        <header className="header">
          <h1>ДЕЛА</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList tasks={task}/>
          <Footer />
        </section>
    </section>
  );
};

export default App