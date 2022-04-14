import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGraphics } from "../api/queries";

export type GraphicsType = {
  salary_medium_per_month: [];
  activity_count: [];
};

export const useGraphics = () => {
  const dispatch = useDispatch();

  const [activity_count, setActivity_count] = React.useState([]);
  const [salary_medium_per_month, setSalary_medium_per_month] = React.useState(
    []
  );

  React.useEffect(() => {
    getGraphics().then((res) => {
      setActivity_count(res.data.activity_count);
      setSalary_medium_per_month(res.data.salary_medium_per_month);
    });
  }, [dispatch]);

  return {
    salary_medium_per_month,
    activity_count,
  };
};
