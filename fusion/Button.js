import {css} from 'emotion';
import { withTheme } from 'theming'
import PropTypes from 'prop-types';

const buttonStyle=css`
    background-color:${props=>props.theme.buttonColor}; 
    color:${props=>props.theme.buttonTextColor};
    border-radius:5px;
      padding:0.5rem 1rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;

`


const Button = (props) => {
  return (

    <button
      type="button"
      onClick={props.onClick}
      className={buttonStyle}
      disabled={props.disabled}
    >
      {props.children}
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
  children: PropTypes.string,
  /**
   * disabled
   */
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
}
export default withTheme(Button);