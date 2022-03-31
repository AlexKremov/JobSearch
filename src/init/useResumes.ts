import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getResumes } from "../api/queries";
import { Level } from "../types/Resume";
import { ResumeState, setResumes } from "./resumes";
import { AppState } from "./rootReducer";
import Resume from "../types/Resume";

export type FilterType = {
  // experience: number,
  level: keyof typeof Level | "";
  tags: string[];
};

// type Props = {
//   // onUpdateLevel(value: keyof typeof Level): void,
//   // onUpdateTags(value: string[]): void,
//   search: FilterType,
//   list: Resume[],
// }

export const useResumes = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState({
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

  const handleSelectTags = (selectedTags) => {
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

  const handleSelectlevel = (value) => {
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
