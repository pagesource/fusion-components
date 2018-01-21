import styled from "emotion/react";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "theming";

const Panel = props => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

const styledPanel = styled(Panel)`
  border: thin solid #aaa;
  margin: 10px;
  background: #${props => props.theme.panelBackground};
  box-shadow: ${props => props.theme.panelShadow};
  padding: ${props => props.theme.panelPadding};
`;
Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
};
Panel.defaultProps = {
  className: "",
  children: ""
};

export default withTheme(styledPanel);
