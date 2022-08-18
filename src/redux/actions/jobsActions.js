import { getJobs } from '../../services/jobsService';

export const initJobs = () => {
  return async dispatch => {
    const jobs = await getJobs();

    dispatch({
      type: '@jobs/INIT_JOBS',
      payload: jobs
    });
  };
};

//necessary for redux-thunk