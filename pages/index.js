import { ThemeProvider } from 'theming';
import { Alert, Avatar, Banner, Button, theme } from '../index';
import Layout from './components/Layout.js';

export default props => (<Layout>
  <ThemeProvider theme={theme}>
    <div>
      <h2>Button </h2>
      <Button>I'm a button</Button>
      <hr />
      <h3>Avatar</h3>
      <Avatar src="http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg" alt="Avatar Image" />

      <h2>Alert </h2>
      <Alert>There was a problem rendering this box</Alert>
      <hr />

      <h2>Banner </h2>
      <Banner src="http://lorempixel.com/560/150/sports" alt="Banner" />
      <hr />
    </div>
  </ThemeProvider>
</Layout>);
