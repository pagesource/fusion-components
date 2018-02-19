import { css } from 'emotion';
import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const chartSize = css`
  width: '450px';
  height: '350px';
`;

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(131, 145, 146  ,0.4)',
      hoverBorderColor: 'rgba(52, 73, 94,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};
const HorizontalBarChart = () => (
  <div className={chartSize}>
    <HorizontalBar data={data} />
  </div>
);
export default HorizontalBarChart;
