import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../api/queries';
import { JobState, setJobs } from './jobs';
import { AppState } from './rootReducer';
import { Level } from '../types/Resume';
import Job from '../types/Job';

export type JobFilterType = {
  level: keyof typeof Level | ''
  currency: string | ''
  salary: number
  activity: string[]
  skills: string[]
};

type Props = {
  handleSelectSkills(value: string[]): void
  handleSelectActivity(value: string[]): void
  handleSelectlevel(value: keyof typeof Level | ''): void
  handleSelectCurrency(value: string | ''): void
  handleSelectSalary(value: number): void
  handleChangePage(value: number): void
  total: number
  search: JobFilterType
  list: Job[]
};

export const useJobs = (): Props => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState<JobFilterType>({
    level: '',
    currency: '',
    salary: 0,
    activity: [],
    skills: [],
  });

  const { list } = useSelector<AppState, JobState>((state) => state.jobs);

  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    getJobs().then((res) => {
      setTotal(res.data.total);
      dispatch(setJobs(res.data.list));
    });
  }, [dispatch]);

  const handleChangePage = (page: number) => {
    const newSearch = {
      ...search,
      page,
    };

    setSearch(newSearch);

    getJobs(newSearch).then((res) => {
      setTotal(res.data.total);
      dispatch(setJobs(res.data.list));
    });
  };

  const handleSelectlevel = (value: keyof typeof Level | '') => {
    const newSearch = {
      ...search,
      level: value,
    };

    setSearch(newSearch);

    getJobs(newSearch).then((res) => {
      setTotal(res.data.total);
      dispatch(setJobs(res.data.list));
    });
  };

  const handleSelectCurrency = (value: string | '') => {
    const newSearch = {
      ...search,
      currency: value,
    };

    setSearch(newSearch);

    getJobs(newSearch).then((res) => {
      setTotal(res.data.total);
      dispatch(setJobs(res.data.list));
    });
  };

  const handleSelectSalary = (value: number) => {
    const newSearch = {
      ...search,
      salary: value,
    };

    setSearch(newSearch);

    getJobs(newSearch).then((res) => {
      setTotal(res.data.total);
      dispatch(setJobs(res.data.list));
    });
  };

  const handleSelectActivity = (selectedActivity: []) => {
    const newSearch = {
      ...search,
      activity: selectedActivity,
    };

    setSearch(newSearch);

    getJobs(newSearch).then((res) => {
      setTotal(res.data.total);
      dispatch(setJobs(res.data.list));
    });
  };

  const handleSelectSkills = (selectedSkills: []) => {
    const newSearch = {
      ...search,
      skills: selectedSkills,
    };

    setSearch(newSearch);

    getJobs(newSearch).then((res) => {
      setTotal(res.data.total);
      dispatch(setJobs(res.data.list));
    });
  };

  return {
    list,
    search,
    total,
    handleSelectlevel,
    handleSelectCurrency,
    handleSelectSalary,
    handleSelectActivity,
    handleSelectSkills,
    handleChangePage,
  };
};
