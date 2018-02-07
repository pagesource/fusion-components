import styled from 'react-emotion';
import React from 'react';
import { withTheme } from 'theming';
import theme from '../theme';

const Panel = ({ className, children }) => <div theme={theme} className={className}>{children}</div>;

const styledPanel = styled(Panel)`
  border: thin solid #aaa;
  margin: 10px;
  background: #${props => props.theme.panelBackground};
  box-shadow: ${props => props.theme.panelShadow};
  padding: ${props => props.theme.panelPadding};
`;

export default withTheme(styledPanel);
