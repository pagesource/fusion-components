//---- global imports ----------
import Layout from "./components/Layout";
import Link from "next/link";
import { ThemeProvider, withTheme } from "theming";
import theme from "../fusion/themes";
// --------page specific imports---------
import Stepper from "../fusion/Stepper";
import ControlStepper from "../fusion/StepperControl";
import Pagination from "../fusion/Pagination";
import Navbar from "../fusion/Navbar";

const ComingSoon = props => (
  <Layout>
    <ThemeProvider theme={theme}>
      <div>
        <h2>Navigation Components</h2>
        Navigation Components.
        <h3>Nav bar </h3>
        <Navbar />
        <pre>{` const = NavList: [
            {
              "navName": "Home",
              "link":"/home"
            },
            {
              "navName":"Recent",
             "link":"/recent"
           },
            {
              "navName": "About Us",
              "link":"/about"
            },
            {
              "navName": "Contact Us",
              "link":"/Contact"}
          ],
          <Navbar NavLinks={NavLinks}/>
          `}</pre>
        <h3>Stepper Controls </h3>
        <ControlStepper />
        <pre>{`<ControlStepper />
          `}</pre>
        <h3>Pagination </h3>
        <Pagination />
        <pre>{`<Pagination />
          `}</pre>
      </div>
    </ThemeProvider>
  </Layout>
);

export default ComingSoon;
