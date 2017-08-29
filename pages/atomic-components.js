//-----Global Imports ---------
import Layout from "./components/Layout";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { ThemeProvider, withTheme } from "theming";
import theme from "../fusion/themes";

//-------- Page level Imports ----------
import Avatar from "../fusion/Avatar";
import Button from "../fusion/Button";

const ContentComponent = props => (
  <Layout>
    <ThemeProvider theme={theme}>
      <div>
        <h2>Atomic Level Components</h2>
        <p>Primitive Atomic Level Components.</p>
        <h3>Avatar</h3>
        <Avatar src="http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg" />
        <pre
        >{`<Avatar src="http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg" />
          `}</pre>
        <h3>Button</h3>
        <Button>Click Here</Button>
        <pre>{`<Button>Click Here</Button>
          `}</pre>
      </div>
    </ThemeProvider>
  </Layout>
);

export default ContentComponent;
