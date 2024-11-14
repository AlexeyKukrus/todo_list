import React, { useEffect, useState } from 'react'
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
  const [filteredTaskList, setFilteredTaskList] = useState<TaskListItem[]>([])
  const [activeTab, setActiveTab] = useState<string>("all")
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(taskList))
  }, [taskList])

  useEffect(() => {
    let updatedFilteredTaskList = []
    if (activeTab === "active") {
      updatedFilteredTaskList = taskList.filter((item) => item.status === 'view')
    } else if (activeTab === "complete") {
      updatedFilteredTaskList = taskList.filter((item) => item.status === 'completed')
    } else {
      updatedFilteredTaskList = taskList
    }

    let updatedCounter = taskList.filter((item) => item.status === "view").length

    setFilteredTaskList(updatedFilteredTaskList)
    setCounter(updatedCounter)
  }, [activeTab, taskList])

  const changeTaskStatus = (id: string) => {
    const updatedTaskList = taskList.map((item:TaskListItem) => {
      if(item.id === id) {
        const currentStatus = item.status === "view" ? "completed" : 'view'
        return {...item, status: currentStatus}
      }
      return item
    })
    
    setTaskList(updatedTaskList)
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
  }

  const deleteTask = (id:string) => {
    const updatedTaskList = taskList.filter((item:TaskListItem) => item.id !== id)
    setTaskList(updatedTaskList)
  }
  const editTask = (id:string, name:string) => {
    console.log("edit", id, name)
  }

  const changeActiveTab = (id: string) => {
    const updatedActiveTab = id
    setActiveTab(updatedActiveTab)
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
            tasks={filteredTaskList}
            onChangeTaskStatus={changeTaskStatus}
            onDeleteTask={deleteTask}
            onEditTask={editTask}
          />
          <Footer 
            counter={counter}
            onTabChange={changeActiveTab}
          />
        </section>
    </section>
  );
};

export default App