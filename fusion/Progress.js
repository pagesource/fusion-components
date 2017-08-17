import PropTypes from 'prop-types';
import {keyframes, css} from 'emotion';
import { withTheme } from 'theming';

const valueStyle =css`
  font-weight: bold;
  fontsize: 24px;
  display: block;
    position: relative;
    top: 54px;
`

const ProgressStyle = css`
    border: 16px solid #f3f3f3; 
    border-top: 16px solid #3498db; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
  `

const Progress = (props) => {
  return ( 
    <div css={`composes: ${ProgressStyle}`} value={props.value}>
      <div className="valueStyle">{props.value}% </div>
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
  value: (1/3)*100
};

export default withTheme(Progress);
