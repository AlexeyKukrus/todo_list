import React from "react";

import styles from './NewTaskForm.module.scss'

const NewTaskForm: React.FC = () => {
  return (
    <input className="new-todo" placeholder="Что нужно сделать...?" /* autofocus */></input>
  )
}

export default NewTaskForm;