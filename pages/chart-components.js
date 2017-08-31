import React from 'react';
import { ThemeProvider } from 'theming';
import { BarChart, Doughnut, PieChart } from '../';
import theme from '../theme';
import Layout from './components/Layout';

const ChartingComponent = props => (<Layout>
  <ThemeProvider theme={theme}>
    <div>
      <h2>Charts</h2>
	  Contains a few charting components.This uses the charts.js library and react-chartjs-2 npm module.
	  <h3>Bar Chart </h3>
      <BarChart />
      <pre>{`<BarChart />
          `}</pre>
      <h3>Pie Chart </h3>
      <PieChart />
      <pre>{`<BarChart />
          `}</pre>
      <h3>Doughnut Chart </h3>
      <Doughnut />
      <pre>{`<DoughnutChart />
          `}</pre>
    </div>
  </ThemeProvider>
</Layout>);

export default ChartingComponent;
