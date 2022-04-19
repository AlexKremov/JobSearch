import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResumes } from '../api/queries';
import Resume, { Level } from '../types/Resume';
import { ResumeState, setResumes } from './resumes';
import { AppState } from './rootReducer';

export type FilterType = {
  experience: string
  level: keyof typeof Level | ''
  tags: string[]
};

type Props = {
  handleSelectTags(value: string[]): void
  handleSelectExperience(value: string): void
  handleSelectlevel(value: keyof typeof Level | ''): void
  handleChangePage(value: number): void
  total: number
  search: FilterType
  list: Resume[]
};

export const useResumes = (): Props => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState<FilterType>({
    level: '',
    tags: [],
    experience: '',
  });

  const { list } = useSelector<AppState, ResumeState>(
    (state) => state.resumes
  );

  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    getResumes().then((res) => {
      setTotal(res.data.total);
      dispatch(setResumes(res.data.list));
    });
  }, [dispatch]);

  const handleSelectTags = (selectedTags: []) => {
    const newSearch = {
      ...search,
      tags: selectedTags,
    };

    setSearch(newSearch);

    getResumes(newSearch).then((res) => {
      setTotal(res.data.total);
      dispatch(setResumes(res.data.list));
    });
  };

  const handleSelectExperience = (value: string) => {
    const newSearch = {
      ...search,
      experience: value,
    };
    setSearch(newSearch);

    getResumes(newSearch).then((res) => {
      setTotal(res.data.total);
      dispatch(setResumes(res.data.list));
    });
  };

  const handleChangePage = (page: number) => {
    const newSearch = {
      ...search,
      page,
    };

    setSearch(newSearch);

    getResumes(newSearch).then((res) => {
      setTotal(res.data.total);
      dispatch(setResumes(res.data.list));
    });
  };

  const handleSelectlevel = (value: keyof typeof Level | '') => {
    const newSearch = {
      ...search,
      level: value,
    };

    setSearch(newSearch);

    getResumes(newSearch).then((res) => {
      setTotal(res.data.total);
      dispatch(setResumes(res.data.list));
    });
  };

  return {
    search,
    list,
    total,
    handleSelectTags,
    handleSelectExperience,
    handleSelectlevel,
    handleChangePage,
  };
};
