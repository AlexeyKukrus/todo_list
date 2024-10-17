import React from "react";

import styles from './NewTaskForm.module.scss'

interface PropTypes {
  onChangeTaskName: (name: string) => void
  onKeyDown: (event: string) => void
}

const NewTaskForm: React.FC<PropTypes> = ({onChangeTaskName, onKeyDown}) => {
  return (
    <input 
      className="new-todo" 
      placeholder="Что нужно сделать...?" 
      onChange={(e)=>{onChangeTaskName(e.target.value)}}
      onKeyDown={(e) => {onKeyDown(e.code)}}
    ></input>
  )
}

export default NewTaskForm;