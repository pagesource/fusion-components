import PropTypes from 'prop-types';
import styled from 'styled-components';

const Progress = styled.progress.attrs({
  value: props => props.value
})`
  display: block;
  height: 4px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0px;
  width: 100%;
  background-color: #dee1e3;
`;

/* Props Check */
Progress.propTypes = {
  /**
   * Progress Length
  */
  value: PropTypes.number
};

/* Deafult Props */
Progress.defaultProps = {
  value: {1/2}
};

export default Progress;
