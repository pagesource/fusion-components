import React from 'react';
import { ThemeProvider } from 'theming';
import { Avatar, Button } from '../';
import theme from '../theme';
// -----Global Imports ---------
import Layout from './components/Layout';
// -------- Page level Imports ----------

const AtomicComponent = props => (<Layout>
  <ThemeProvider theme={theme}>
    <div>
      <h2>Atomic Level Components</h2>
      <p>Primitive Atomic Level Components.</p>
      <h3>Avatar</h3>
      <Avatar src="http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg" alt="Avatar Image" />
      <pre>
        {'<Avatar src="http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg" alt="Avatar Image" />'}
      </pre>
      <h3>Button</h3>
      <Button>Click Here</Button>
      <pre>{`<Button>Click Here</Button>
          `}</pre>
    </div>
  </ThemeProvider>
</Layout>);

export default AtomicComponent;
