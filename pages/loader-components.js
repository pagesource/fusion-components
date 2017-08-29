import Layout from "./components/Layout";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { ThemeProvider, withTheme } from "theming";
import theme from "../fusion/themes";
import Loader from "../fusion/Loader";
import Ripples from "../fusion/Ripples";
import ProgressBar from "../fusion/ProgressBar";
import ProgressCircle from "../fusion/ProgressCircle";
import LiveEdit from "../fusion/LiveEdit";

const ContentComponent = props =>
  <Layout>
    <ThemeProvider theme={theme}>
      <div>
        <h2>Progress & Activity</h2>
        <p>
          This section contains a collection of progress bars and spinner
          components .
        </p>
        <h3>Circular Loader </h3>
        <Loader />
        <pre>{`  <Loader />
          `}</pre>
        <h3>Rippling Loader</h3>
        <Ripples />
        <pre>{`
       <Ripples/>
          `}</pre>

        <h3>Progress Bar</h3>
        <ProgressBar value={25} />
        <pre>{`
       <ProgressBar value={25}/>
          `}</pre>

        <h3>Progress Circle</h3>
        <ProgressCircle value={65} />
        <pre>{`
       <ProgressCircle value={65}/>
          `}</pre>
      </div>
    </ThemeProvider>
  </Layout>;

export default ContentComponent;
