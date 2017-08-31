import { css } from 'emotion';
import React from 'react';
import { withTheme } from 'theming';
import theme from '../theme';

const PanelStyle = css`
  border:thin solid #aaa;
  margin:10px;
  background:#fff;
  box-shadow: ${theme.panelShadow};
  padding:${theme.panelPadding};
`;

const Panel = ({ children }) => (<div className={PanelStyle}>
  {children}
</div>);

export default withTheme(Panel);
