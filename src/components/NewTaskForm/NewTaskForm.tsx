import React, { useState } from "react";

import styles from './NewTaskForm.module.scss'

interface PropTypes {
  onAddTask: (item:string) => void
}

const NewTaskForm: React.FC<PropTypes> = ({ onAddTask }) => {
  const [value, setValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const currentValue = event.currentTarget.value;
      if (currentValue.trim()) {
        onAddTask(currentValue); 
        setValue(''); 
      }
    }
  };
  return (
    <input 
      className="new-todo" 
      placeholder="Что нужно сделать...?"
      onChange={handleChange}
      onKeyDown={handleSubmit}
      value={value}
    ></input>
  )
}

export default NewTaskForm;