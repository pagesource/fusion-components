import styled from 'react-emotion';
import React from 'react';
import { withTheme } from 'theming';
import PropTypes from 'prop-types';
import theme from '../theme';

const Panel = ({ className, children }) => (
  <div theme={theme} className={className}>
    {children}
  </div>
);

const styledPanel = styled(Panel)`
  border: thin solid #aaa;
  margin: 10px;
  background: #${props => props.theme.panelBackground};
  box-shadow: ${props => props.theme.panelShadow};
  padding: ${props => props.theme.panelPadding};
`;

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};
Panel.defaultProps = {
  children: null,
  className: 'default',
};
export default withTheme(styledPanel);
