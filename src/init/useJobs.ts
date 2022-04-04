import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../api/queries";
import { JobState, setJobs } from "./jobs";
import { AppState } from "./rootReducer";
import { Level } from "../types/Resume";
import Job from "../types/Job";

export type JobFilterType = {
  level: keyof typeof Level | "";
  currency: string | "";
  salary: number | "";
  activity: string[];
};

type Props = {
  handleSelectActivity(value: string[]): void;
  handleSelectlevel(value: keyof typeof Level | ""): void;
  handleSelectCurrency(value: string | ""): void;
  handleSelectSalary(value): void;
  search: JobFilterType;
  list: Job[];
};

export const useJobs = (): Props => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState<JobFilterType>({
    level: "",
    currency: "",
    salary: 0,
    activity: [],
  });

  const { list } = useSelector<AppState, JobState>((state) => state.jobs);

  React.useEffect(() => {
    getJobs().then((res) => {
      dispatch(setJobs(res.data));
    });
  }, [dispatch]);

  const handleSelectlevel = (value: keyof typeof Level | "") => {
    const newSearch = {
      ...search,
      level: value,
    };

    setSearch(newSearch);

    getJobs(newSearch).then((res) => {
      dispatch(setJobs(res.data));
    });
  };

  const handleSelectCurrency = (value: string | "") => {
    const newSearch = {
      ...search,
      currency: value,
    };

    setSearch(newSearch);

    getJobs(newSearch).then((res) => {
      dispatch(setJobs(res.data));
    });
  };

  const handleSelectSalary = (value) => {
    const newSearch = {
      ...search,
      salary: value,
    };

    setSearch(newSearch);

    getJobs(newSearch).then((res) => {
      dispatch(setJobs(res.data));
    });
  };

  const handleSelectActivity = (selectedActivity: []) => {
    const newSearch = {
      ...search,
      activity: selectedActivity,
    };

    setSearch(newSearch);

    getJobs(newSearch).then((res) => {
      dispatch(setJobs(res.data));
    });
  };

  return {
    list,
    search,
    handleSelectlevel,
    handleSelectCurrency,
    handleSelectSalary,
    handleSelectActivity,
  };
};
