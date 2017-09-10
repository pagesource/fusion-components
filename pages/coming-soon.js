import React from 'react';
import { ThemeProvider } from 'theming';
import { EmailSubscribe } from '../';
import theme from '../theme';
import Layout from './components/Layout';

const ComingSoon = () => (<Layout>
  <ThemeProvider theme={theme}>
    <EmailSubscribe action="#server_address" />
  </ThemeProvider>
</Layout>);

export default ComingSoon;
