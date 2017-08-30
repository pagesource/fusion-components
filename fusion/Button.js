import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const buttonStyle = css`
    background-color:${props => props.theme.buttonColor}; 
    color:${props => props.theme.buttonTextColor};
    border-radius:5px;
      padding:0.5rem 1rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;

`;

const Button = ({ children, onClick, disabled }) => (<button
  type="button"
  onClick={onClick}
  className={buttonStyle}
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
