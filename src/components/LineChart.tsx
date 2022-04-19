import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useGraphics } from '../init/useGraphics';

const Page: React.FC = () => {
  const { graphics } = useGraphics();
  const option = {
    title: {
      text: 'Average monthly salary',
    },
    tooltip: {
      trigger: 'axis',
    },

    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '7%',
      right: '3%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        type: 'line',
        areaStyle: { normal: {} },
        data: graphics.salary_medium_per_month,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400, width: 1150 }} />;
};

export default Page;
