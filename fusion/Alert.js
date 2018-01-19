import { css } from 'emotion';
import React from 'react';
import { withTheme } from 'theming';

const alertStyle = css`
  background: #ccc;
  box-shadow: 0 0 3px #aaa;
  padding: 5px;
`;

const Alert = ({ children }) => <div className={alertStyle}> {children} </div>;

export default withTheme(Alert);
