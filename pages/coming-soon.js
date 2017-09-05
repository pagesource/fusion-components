import React from 'react';
import { ThemeProvider } from 'theming';
import theme from '../theme';
import { EmailSubscribe} from '../';
import Layout from './components/Layout';

const ComingSoon = props => (<Layout>
  <ThemeProvider theme={theme}>
    <EmailSubscribe action="#server_address"/>
  </ThemeProvider>
</Layout>);

export default ComingSoon;
