import PropTypes from 'prop-types';
import {keyframes, css} from 'emotion';
import styled from 'emotion/react';
import { withTheme } from 'theming';

const ProgressBlock = styled('div')`
  margin: 10 auto;
  width: 400px;
  height: 16px;
  padding: 4px;
  background: linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(53,140,232,1) 27%, rgba(32,124,229,1) 54%);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
`

const Container = styled('div')`
  width: 400px;
  text-align: center;
`
const ProgresssBar = styled('div')`
  width: 132px;
  // width: ${props =>props.value};
  height: 16px;
  background: linear-gradient(to bottom, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 60%,rgba(125,185,232,1) 100%);
  border-radius: 4px;
  transition: 0.4s linear;
  transition-property: width, background-color;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
`

const text= css`
   width: 30px;
   background: white;
   color: black;
`
const label=css` 
  display: inline-block;
  margin: 0 5px 20px;
  padding: 3px 8px;
  background: #ddd;
  text-shadow: 0 1px black;
  border-radius: 3px;
  cursor: pointer;
`

const Progress = (props) => {
  return ( 
  <Container>{props.value}%
    <ProgressBlock>
      <ProgresssBar></ProgresssBar>
    </ProgressBlock>

  </Container>
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
