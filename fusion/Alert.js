import { css } from "emotion";
import React from "react";
import { withTheme } from "theming";
import PropTypes from "prop-types";

const alertStyle = css`
  background: #ccc;
  box-shadow: 0 0 3px #aaa;
  padding: 5px;
`;

const Alert = ({ children }) => <div className={alertStyle}> {children} </div>;
Alert.propTypes = {
  children: PropTypes.element
};
Alert.defaultProps = {
  children: PropTypes.element
};
export default withTheme(Alert);
