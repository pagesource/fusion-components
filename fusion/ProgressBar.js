import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const ProgressBlock = styled('div')`
  margin: 10px auto;
  width: 100%;
  height: 10px;
  padding: 0px;
  background: #ccc;
`;

const Container = styled('div')`
  width: 100%;
  text-align: center;
`;
const ProgressBar = styled('div')`
  width: ${prop => prop.value}%;
  height: 10px;
  background: green;
  transition: 0.4s linear;
  transition-property: width, background-color;
`;

const Progress = ({ value }) => (
  <Container>
    {value}%
    <ProgressBlock>
      <ProgressBar value={value} />
    </ProgressBlock>
  </Container>
);

/* Props Check */
Progress.propTypes = {
  /**
   * Progress Length
   */
  value: PropTypes.number,
};

/* Deafult Props */
Progress.defaultProps = {
  value: 1 / 3 * 100,
};

export default withTheme(Progress);
