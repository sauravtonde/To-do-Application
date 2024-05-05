// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Create a slice for tasks
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    // Define the addTask reducer
    addTask: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    // Define the deleteTask reducer
    deleteTask: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    // Define the toggleTask reducer
    toggleTask: (state, action) => {
      const task = state[action.payload];
      task.completed = !task.completed;
    },
  },
});

// Export the actions from the tasks slice
export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

export const selectTasks = state => state.tasks;

export default tasksSlice.reducer;
