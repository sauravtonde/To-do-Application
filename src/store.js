import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

//  Redux store with the tasks reducer configuration
export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
