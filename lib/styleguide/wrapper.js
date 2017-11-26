import React, { Component } from 'react';
import { ThemeProvider } from 'theming';
import { withTheme } from 'theming';
import styled from 'emotion/react';

const theme = {
  color: 'black',
  background: 'white',
};
export default class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}