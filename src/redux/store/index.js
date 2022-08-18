import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { jobsReducer } from '../reducers/jobsReducer';

const rooReducer = combineReducers({
  jobs: jobsReducer
});

export const store = configureStore({
  reducer: rooReducer,
});