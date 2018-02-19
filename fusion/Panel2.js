import { css } from 'emotion';
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'theming';
import theme from '../theme';

const PanelStyle = css`
  border: thin solid #aaa;
  margin: 10px;
  background: #fff;
  box-shadow: ${theme.panelShadow};
  padding: ${theme.panelPadding};
`;

const Panel = ({ children }) => <div className={PanelStyle}>{children}</div>;

Panel.propTypes = {
  children: PropTypes.element,
};
Panel.defaultProps = {
  children: <span> panel 2</span>,
};
export default withTheme(Panel);
