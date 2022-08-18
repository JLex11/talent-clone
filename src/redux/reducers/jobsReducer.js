import { jobs } from '../../others/Jobs';

const initialState = jobs;

export const jobsReducer = (state = initialState, action) => { 
  switch (action.type) {
    case '@jobs/INIT_JOBS':
      return action.payload;
    default:
      return state;
  }
};