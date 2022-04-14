import React from "react";
import ReactECharts from "echarts-for-react";
import { useGraphics } from "../init/useGraphics";

const Page: React.FC = () => {
  const { activity_count } = useGraphics();
  const names = activity_count.map(element => {
    return Object.keys(element)[0];
  })
  const salary = activity_count.map(element => {
    return Object.values(element)[0];
  })

  
  const option = {
    title: {
      text: "Activity salary",
    },
    tooltip: {},
    xAxis: {
      data: names,
    },
    yAxis: {},
    series: [
      {
        name: "",
        type: "bar",
        data: salary,
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: 400, width: 1250 }}
      opts={{ renderer: "svg" }}
    />
  );
};

export default Page;




