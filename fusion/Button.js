import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';
import theme from '../theme';

const buttonStyle = css`
  background-color:${theme.buttonColor}; 
  color:${theme.buttonTextColor};
  border-radius:5px;
  padding:0.5rem 1rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

const Button = ({ children, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    className={css`${buttonStyle}`}
    disabled={disabled}
  >
    {children}
  </button>);

Button.propTypes = {
  /**
   * onClick Function
   */
  onClick: PropTypes.func,
  /**
   * Children
   */
  children: PropTypes.string,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};
export default withTheme(Button);
