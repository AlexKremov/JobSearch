import { AxiosPromise } from 'axios';
import axios from './axios';
import Job from '../types/Job';
import Resume from '../types/Resume';
import { FilterType } from '../init/useResumes';
import { JobFilterType } from '../init/useJobs';

export const getJobs = (
  queryParams: JobFilterType = {
    level: '',
    currency: '',
    salary: 0,
    activity: [],
    skills: [],
  }
): AxiosPromise<{ list: Job[]; total: number }> => axios.get('/jobs', {
  params: queryParams,
});

export const getResumes = (
  queryParams: FilterType = { level: '', tags: [], experience: '' }
): AxiosPromise<{ list: Resume[]; total: number }> => axios.get('/resumes', {
  params: queryParams,
});

type Activity = {
  [key: string]: number
};

type Graphics = {
  salary_medium_per_month: string[]
  activity_count: Activity[]
};

export const getGraphics = (): AxiosPromise<Graphics> => axios.get('/graphs');
