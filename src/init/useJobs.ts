import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../api/queries';
import { JobState, setJobs } from './jobs';
import { AppState } from './rootReducer';


export const useJobs = () => {
  const dispatch = useDispatch();
  const { list } = useSelector<AppState, JobState>((state) => state.jobs);

  React.useEffect(() => {
    getJobs().then((res) => {
      dispatch(setJobs(res.data));
    });
  }, [dispatch]);

  return {
    list,
  };
};
