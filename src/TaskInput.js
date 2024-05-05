import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

const TaskInput = () => {
  // Use the useState hook to manage the input state
  const [input, setInput] = useState('');
  // Use the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Define the handleSubmit function
  const handleSubmit = e => {
    e.preventDefault();
    if(input) {
      // Dispatch the addTask action with the input as the payload
      dispatch(addTask(input));
      // Clear the input
      setInput('');
    }
  };

  // Render the TaskInput component
  return (
    <form onSubmit={handleSubmit} >
      <input 
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
