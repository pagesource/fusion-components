import PropTypes from "prop-types";
import { keyframes, css } from "emotion";
import styled from "emotion/react";
import { withTheme } from "theming";

const ProgressBlock = styled("div")`
  margin: 10 auto;
  width: 100%;
  height: 3px;
  padding: 0px;
  background: #ccc;
`;

const Container = styled("div")`
  width: 100%;
  text-align: center;
`;
const ProgresssBar = styled("div")`

 width: ${props => props.value};
  height: 3px;
  background: green;
  transition: 0.4s linear;
  transition-property: width, background-color;
  
`;

const text = css`
   width: 30px;
   background: white;
   color: black;
`;
const label = css` 
  display: inline-block;
  margin: 0 5px 20px;
  padding: 3px 8px;
  background: #ddd;
  text-shadow: 0 1px black;
  border-radius: 3px;
  cursor: pointer;
`;

const Progress = props => {
  return (
    <Container>
      {props.value}%
      <ProgressBlock>
        <ProgresssBar />
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
  value: 1 / 3 * 100
};

export default withTheme(Progress);
