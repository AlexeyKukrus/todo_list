import React from 'react'

import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

const App: React.FC = () => {
  return (
    <section className="todoapp">
        <header className="header">
          <h1>ДЕЛА</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList />
          <Footer />
        </section>
    </section>
  );
};

export default App