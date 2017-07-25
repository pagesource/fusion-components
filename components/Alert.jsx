import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlertSC = styled.div.attrs({
  	background: props => {
      if(props.type === 'success') {
        return 'green'
      }
      if(props.type === 'info') {
        return 'blue'
      }
      if(props.type === 'warning') {
        return 'yellow'
      }
      if(props.type === 'error') {
        return 'red'
      }
    },
    color: props => {
      if(props.type === 'success') {
        return 'white'
      }
      if(props.type === 'info') {
        return 'white'
      }
      if(props.type === 'warning') {
        return 'black'
      }
      if(props.type === 'error') {
        return 'white'
      }
    },

})`
    background: ${props => props.background};
    padding: 5px;
    margin: 5px;
    color: ${props => props.color};
`;

/* Props Check */
AlertSC.propTypes = {
  /**
  * Type of AlertSC
  */
  type: PropTypes.oneOf(['warning', 'info', 'error', 'success']),
};

/* Deafult Props */
AlertSC.defaultProps = {
  type: "success",
};

export default AlertSC;
