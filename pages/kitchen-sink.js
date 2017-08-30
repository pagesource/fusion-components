import Layout from "./components/Layout";

import Link from "next/link";
import Button from "../fusion/Button";
import Avatar from "../fusion/Avatar";
import Alert from "../fusion/Alert";
import Banner from "../fusion/Banner";
import Panel from "../fusion/Panel";

import { ThemeProvider, withTheme } from "theming";
import theme from "../fusion/themes";

const KitchenSink = props =>
  <Layout>
    <ThemeProvider theme={theme}>
      <div>
      <h2>This is a themed panel</h2>
      <Panel> I am a panel</Panel>
      </div>
    </ThemeProvider>
  </Layout>

export default KitchenSink;
