import PropTypes from 'prop-types';
import {keyframes, css} from 'emotion';
import styled from 'emotion/react';
import { withTheme } from 'theming';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -50px, 0);
  }

  70% {
    transform: translate3d(0, -20px, 0);
  }

  90% {
    transform: translate3d(0,-5px,0);
  }
`

const BounceIt = styled('div')`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  animation: ${bounce} 1s ease infinite;
  transform-origin: center bottom;
`

const Bounce = (props) => {
  return ( 
    <BounceIt>
      <img src={props.src} width={props.width}px/>
    </BounceIt>
  );
};

/* Props Check */
Bounce.propTypes = {
  /**
   * Image src link
  */
  src: PropTypes.string,
    /**
   * Image width
  */
  width: PropTypes.number

};

/* Deafult Props */
Bounce.defaultProps = {
  src: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Basketball_ball.svg",
  width: 40
};

export default withTheme(Bounce);