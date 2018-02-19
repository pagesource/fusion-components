import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';
import theme from '../theme';

const Button = ({ children, onClick, disabled, theme }) => {
  const buttonStyle = css`
    background-color: ${theme.buttonColor};
    color: ${theme.buttonTextColor};
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
  `;
  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonStyle}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * onClick Function
   */
  onClick: PropTypes.func,
  /**
   * Children
   */
  children: PropTypes.element,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * disabled
   */
  theme: PropTypes.objectOf(PropTypes.string),
};

Button.defaultProps = {
  disabled: false,
  children: '',
  onClick: () => {},
  theme,
};
export default withTheme(Button);
