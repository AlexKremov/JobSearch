import { AxiosPromise } from 'axios';
import axios from './axios';
import Job from '../types/Job';
import Resume from '../types/Resume';
import { FilterType } from '../init/useResumes';

export const getJobs = (): AxiosPromise<Job[]> => {
    return axios.get('/');
  };

  export const getResumes = (
    queryParams = { level: '', tags: [], experience: ''  }
  ): AxiosPromise<Resume[]> => {
    return axios.get('/resumes', {
      params: queryParams
    });
  };