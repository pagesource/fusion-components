import Layout from "./components/Layout";
import Link from "next/link";
import { ThemeProvider, withTheme } from "theming";
import theme from "../fusion/themes";
const ComingSoon = props =>
  <Layout>
    <ThemeProvider theme={theme}>
      <div>
        <h2>Coming Soon ¯\_(ツ)_/¯ </h2>
        We hope these components see the light of day very soon. If you are
        interested feel free to contribute a few components
      </div>
    </ThemeProvider>
  </Layout>;

export default ComingSoon;
