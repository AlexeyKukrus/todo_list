import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

import { TaskListItem } from './types/types';

const App: React.FC = () => {
  const [taskList, setTaskList] = useState<TaskListItem[]>(() => {
    const savedTasks = localStorage.getItem("todo");
    return savedTasks ? (JSON.parse(savedTasks) as TaskListItem[]) : [];
  });

  const setItemsToLocalStorage = (list: TaskListItem[]) => {
    localStorage.setItem("todo", JSON.stringify(list))
  }

  const changeTaskStatus = (id: string) => {
    const updatedTaskList = taskList.map((item:TaskListItem) => {
      if(item.id === id) {
        const currentStatus = item.status === "view" ? "completed" : 'view'
        return {...item, status: currentStatus}
      }
      return item
    })
    
    setTaskList(updatedTaskList)
    setItemsToLocalStorage(updatedTaskList)
  }

  const addTask = (task: string) => {
    const newTask = {
      id: uuidv4(),
      name: task,
      status: "view",
      time: new Date()
    }
    const updatedTaskList = [...taskList, newTask]
    setTaskList(updatedTaskList)
    setItemsToLocalStorage(updatedTaskList)
  }

  const deleteTask = (id:string) => {
    const updatedTaskList = taskList.filter((item:TaskListItem) => item.id !== id)

    setTaskList(updatedTaskList)
    setItemsToLocalStorage(updatedTaskList)
  }

  return (
    <section className="todoapp">
        <header className="header">
          <h1>ДЕЛА</h1>
          <NewTaskForm 
            onAddTask={addTask}
          />
        </header>
        <section className="main">
          <TaskList 
            tasks={taskList}
            onChangeTaskStatus={changeTaskStatus}
            onDeleteTask={deleteTask}
          />
          <Footer />
        </section>
    </section>
  );
};

export default App