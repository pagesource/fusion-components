import React from 'react';
import { ThemeProvider } from 'theming';

const theme = {
  color: 'black',
  background: 'white',
};
const Wrapper = () => (
  <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
);
export default Wrapper;
