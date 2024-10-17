// Task.test.tsx

import { renderHook} from '@testing-library/react';
import { useState, act } from 'react';

describe('changeTaskName', () => {
  jest.useFakeTimers(); 

  const changeTaskName = (setNewTaskName: (name: string) => void, name: string) => {
    setTimeout(() => {
      setNewTaskName(name);
    }, 500);
  };

  it('Текст задачи с задержкой 500 мс', () => {
    const { result } = renderHook(() => useState(''));
    const [newTaskName, setNewTaskName] = result.current;

    act(() => {
      changeTaskName(setNewTaskName, 'Задача');
    });
    expect(newTaskName).toBe('');

    act(() => {
      jest.runAllTimers();
    });

    expect(result.current[0]).toBe('Задача');
  });
});
