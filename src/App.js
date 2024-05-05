// Import necessary hooks and functions from React and Redux
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import the actions and selectors from the tasks slice
import { addTask, selectTasks } from './tasksSlice';
// Import the TaskInput and TaskList components
import TaskInput from './TaskInput';
import TaskList from './TaskList';
// Import the CSS for the App component
import './App.css'

// Define the App component
const App = () => {
  // Use the useSelector hook to get the current state of tasks
  const tasks = useSelector(selectTasks);
  // Use the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Use the useEffect hook to load tasks from localStorage when the component mounts
  useEffect(() => {
    const loadedTasks = localStorage.getItem('tasks');
    if (loadedTasks) {
      JSON.parse(loadedTasks).forEach(task => dispatch(addTask(task.text))); // change here
    }
  }, [dispatch]);
  

  // Use the useEffect hook to save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Render the App component
  return (
    <div>
      <h1>To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

// Export the App component as the default export
export default App;
