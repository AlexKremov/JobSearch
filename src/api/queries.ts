import { AxiosPromise } from "axios";
import axios from "./axios";
import Job from "../types/Job";
import Resume from "../types/Resume";
import { FilterType } from "../init/useResumes";
import { JobFilterType } from "../init/useJobs";

export const getJobs = (
  queryParams: JobFilterType = {
    level: "",
    currency: "",
    salary: 0,
    activity: [],
    skills: [],
  }
): AxiosPromise<{list: Job[], total: number}> => {
  return axios.get("/jobs", {
    params: queryParams,
  });
};

export const getResumes = (
  queryParams: FilterType = { level: "", tags: [], experience: "" }
): AxiosPromise<{list: Resume[], total: number}> => {
  return axios.get("/resumes", {
    params: queryParams,
  });
};
