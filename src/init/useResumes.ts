import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResumes } from "../api/queries";
import { Level } from "../types/Resume";
import { ResumeState, setResumes } from "./resumes";
import { AppState } from "./rootReducer";
import Resume from "../types/Resume";

export type FilterType = {
  experience: string;
  level: keyof typeof Level | "";
  tags: string[];
};

type Props = {
  handleSelectTags(value: string[]): void;
  handleSelectExperience(value: string): void;
  handleSelectlevel(value: keyof typeof Level | ""): void;
  search: FilterType;
  list: Resume[];
};

export const useResumes = (): Props => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState<FilterType>({
    level: "",
    tags: [],
    experience: "",
  });

  const { list } = useSelector<AppState, ResumeState>((state) => state.resumes);

  React.useEffect(() => {
    getResumes().then((res) => {
      dispatch(setResumes(res.data));
    });
  }, [dispatch]);

  const handleSelectTags = (selectedTags: []) => {
    const newSearch = {
      ...search,
      tags: selectedTags,
    };

    setSearch(newSearch);

    getResumes(newSearch).then((res) => {
      dispatch(setResumes(res.data));
    });
  };

  const handleSelectExperience = (value) => {
    const newSearch = {
      ...search,
      experience: value,
    };
    setSearch(newSearch);

    getResumes(newSearch).then((res) => {
      dispatch(setResumes(res.data));
    });
  };

  const handleSelectlevel = (value: keyof typeof Level | "") => {
    const newSearch = {
      ...search,
      level: value,
    };

    setSearch(newSearch);

    getResumes(newSearch).then((res) => {
      dispatch(setResumes(res.data));
    });
  };

  return {
    search,
    list,
    handleSelectTags,
    handleSelectExperience,
    handleSelectlevel,
  };
};
