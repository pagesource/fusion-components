import {css} from 'emotion';
import { withTheme } from 'theming'
import PropTypes from 'prop-types';


const alertStyle=css`
background:#ccc;
box-shadow:0 0 3px #aaa;
padding:5px;

`

const Alert =(props)=>{
return(

  <div className={alertStyle}>   {props.children} </div>
)

}

/* Props Check */
Alert.propTypes = {
  /**
  * Type of Alert
  */
  type: PropTypes.oneOf(['warning', 'info', 'error', 'success']),
};

/* Deafult Props */
Alert.defaultProps = {
  type: "success",
};

export default withTheme(Alert);
