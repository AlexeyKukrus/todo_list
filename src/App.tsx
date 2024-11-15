import React, { useEffect, useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

import { TaskListItem } from './types/types';

const App: React.FC = () => {
  const [taskList, setTaskList] = useState<TaskListItem[]>(() => {
    const savedTasks = localStorage.getItem('todo');
    return savedTasks ? (JSON.parse(savedTasks) as TaskListItem[]) : [];
  });
  const [activeTab, setActiveTab] = useState<string>('all');

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(taskList));
  }, [taskList]);

  const filteredTaskList = useMemo(() => {
    if (activeTab === 'active') {
      return taskList.filter((item) => item.status === 'view');
    } else if (activeTab === 'complete') {
      return taskList.filter((item) => item.status === 'completed');
    }
    return taskList;
  }, [activeTab, taskList]);

  const counter = useMemo(() => {
    return taskList.filter((item) => item.status === 'view').length;
  }, [taskList]);

  const changeTaskStatus = (id: string) => {
    const updatedTaskList = taskList.map((item: TaskListItem) => {
      if (item.id === id) {
        const currentStatus = item.status === 'view' ? 'completed' : 'view';
        return { ...item, status: currentStatus };
      }
      return item;
    });

    setTaskList(updatedTaskList);
  };

  const addTask = (task: string) => {
    const newTask = {
      id: uuidv4(),
      name: task,
      status: 'view',
      time: new Date(),
    };
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
  };

  const deleteTask = (id: string) => {
    const updatedTaskList = taskList.filter(
      (item: TaskListItem) => item.id !== id
    );
    setTaskList(updatedTaskList);
  };

  const editTask = (id: string, name: string) => {
    const updatedTaskList = taskList.map((item: TaskListItem) => {
      if (item.id === id) {
        return { ...item, name: name };
      }
      return item;
    });

    setTaskList(updatedTaskList);
  };

  const changeActiveTab = (id: string) => {
    const updatedActiveTab = id;
    setActiveTab(updatedActiveTab);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>ДЕЛА</h1>
        <NewTaskForm onAddTask={addTask} />
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
          activeTab={activeTab}
          onTabChange={changeActiveTab}
        />
      </section>
    </section>
  );
};

export default App;
