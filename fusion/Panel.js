import { css } from 'emotion';
import React from 'react';
import { withTheme } from 'theming';
import { theme } from '../theme/index';

const PanelStyle = css`
border:thin solid #aaa;
padding: 10px;
margin:10px;
background:#fff;
box-shadow: 0.25rem 0.25rem 0.5rem #aaa;
// padding:${props => props.theme.panelPadding};

// Until we figure out to get theming working;

`;

const Panel = ({ children }) => (<div className={PanelStyle}>{children}</div>);

export default withTheme(Panel);
