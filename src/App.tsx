import React, { useState } from 'react'

import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

import { TaskListItem } from './types/types';

const App: React.FC = () => {
  const [task, setTask] = useState<TaskListItem[]>([
    {
      id: 1,
      name: "Задача 1",
      status: "completed",
      time: new Date(),
    },
    {
      id: 2,
      name: "Задача 2",
      status: "view",
      time: new Date(),
    },
    {
      id: 3,
      name: "Задача для удаления",
      status: "view",
      time: new Date(),
    }
  ])

  const changeTaskStatus = (id:Number) => {
    const updatedTaskList = task.map((item:TaskListItem) => {
      if(item.id === id) {
        const currentStatus = item.status === "view" ? "completed" : 'view'
        return {...item, status: currentStatus}
      }
      return item
    })
    
    setTask(updatedTaskList)
  }

  const deleteTask = (id:Number) => {
    const udpatedTaskList = task.filter((item:TaskListItem) => item.id !== id)
    setTask(udpatedTaskList)
  }

  return (
    <section className="todoapp">
        <header className="header">
          <h1>ДЕЛА</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList 
          tasks={task}
          onChangeTaskStatus={changeTaskStatus}
          onDeleteTask={deleteTask}
          />
          <Footer />
        </section>
    </section>
  );
};

export default App