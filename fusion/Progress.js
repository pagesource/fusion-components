import PropTypes from 'prop-types';
import {keyframes, css} from 'emotion';

const rotation = keyframes`  
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }  
`

const ProgressStyle = css`
    border: 16px solid #f3f3f3; 
    border-top: 16px solid #3498db; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${rotation} 1s ease infinite;
  `

const Progress = (props) => {
  return ( 
    <div  css={`composes: ${ProgressStyle}`} value={props.value}>
    </div>
  );
};

/* Props Check */
Progress.propTypes = {
  /**
   * Progress Length
  */
  value: PropTypes.number
};

/* Deafult Props */
Progress.defaultProps = {
  value: 1/3
};

export default Progress;
