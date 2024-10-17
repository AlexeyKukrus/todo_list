import React, { useState } from 'react'
import { nanoid } from 'nanoid';

import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

import { TaskListItem } from './types/types';

const App: React.FC = () => {
  const [taskList, setTaskList] = useState<TaskListItem[]>([])
  const [newTaskName, setNewTaskName] = useState<string>('')

  const size = 10
  const id = nanoid(size)

  const changeTaskStatus = (id:string) => {
    const updatedTaskList = taskList.map((item:TaskListItem) => {
      if(item.id === id) {
        const currentStatus = item.status === "view" ? "completed" : 'view'
        return {...item, status: currentStatus}
      }
      return item
    })
    
    setTaskList(updatedTaskList)
  }

  const deleteTask = (id:string) => {
    const udpatedTaskList = taskList.filter((item:TaskListItem) => item.id !== id)
    setTaskList(udpatedTaskList)
  }

  const changeTaskName = (name: string) => {
    setTimeout(()=> {
      setNewTaskName(name)
    }, 500)
  }

  const submitAddForm = (name: string) => {
    let currentTask: TaskListItem = {id: "", name: '', status: '', time: new Date}
    if (name === "Enter") {
      currentTask = {
        id: id,
        name: newTaskName,
        status: "view",
        time: new Date,
      }
      setTaskList((prevTasks) => [...prevTasks, currentTask])
    }
    setNewTaskName('')
  }
  return (
    <section className="todoapp">
        <header className="header">
          <h1>ДЕЛА</h1>
          <NewTaskForm 
            onChangeTaskName={changeTaskName}
            onKeyDown={submitAddForm}
          />
        </header>
        <section className="main">
          <TaskList 
            taskList={taskList}
            onChangeTaskStatus={changeTaskStatus}
            onDeleteTask={deleteTask}
          />
          <Footer />
        </section>
    </section>
  );
};

export default App