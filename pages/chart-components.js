import Layout from "./components/Layout";
import Link from "next/link";
import { ThemeProvider, withTheme } from "theming";
import theme from "../fusion/themes";
import Doughnut from "../fusion/Doughnut";
import PieChart from "../fusion/PieChart";
import BarChart from "../fusion/HorizontalBarChart";
const ComingSoon = props => (
  <Layout>
    <ThemeProvider theme={theme}>
      <div>
        <h2>Charts</h2>
        Contains a few charting components. This uses the charts.js library and
        react-chartjs-2 npm module.
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
  </Layout>
);

export default ComingSoon;
