import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, selectTasks } from './tasksSlice';

const TaskList = () => {
  // Use the useSelector hook to get the current state of tasks
  const tasks = useSelector(selectTasks);
  // Use the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Render the TaskList component
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTask(index))} />
          {tasks.map((task, index) => (
            <div key={index}>
              {task.text}
            </div>
          ))}
          <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
