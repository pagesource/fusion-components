import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const iconClass = css`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid black;
`;
const BackToTop = ({
  text,
  align,
  icon,
  fadeOut,
  position,
  fleft,
  fright,
  fbottom,
}) => {
  const textAlignLeft = css`
    display: flex;
    justify-content: flex-start;
  `;
  const textAlignRight = css`
    display: flex;
    justify-content: flex-end;
  `;
  const iconTextContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `;
  const fadeOutComp = css`
    -webkit-opacity: 0.25;
    -moz-opacity: 0.25;
    opacity: 0.25;
    -webkit-transition: all 3s ease;
    -moz-transition: all 3s ease;
    -o-transition: all 3s ease;
    transition: all 3s ease;
  `;
  const fadeInComp = css`
    -webkit-opacity: 1;
    -moz-opacity: 1;
    opacity: 1;
    -webkit-transition: all 3s ease;
    -moz-transition: all 3s ease;
    -o-transition: all 3s ease;
    transition: all 3s ease;
  `;
  const positionArrowFromLeft = css`
    position: ${position};
    left: ${fleft};
    bottom: ${fbottom}px;
    z-index: 999;
  `;

  const positionArrowFromBottom = css`
    position: ${position};
    bottom: ${fbottom}px;
    z-index: 999;
  `;

  const positionArrowFromRight = css`
    position: ${position};
    right: ${fright};
    bottom: ${fbottom}px;
    z-index: 999;
  `;
  const alignToTopComponent = () => {
    if (fleft.toLowerCase() === '0' && fright.toLowerCase() === '0') {
      return positionArrowFromBottom;
    } else if (fleft.toLowerCase() === '0') {
      return positionArrowFromRight;
    } else if (fright.toLowerCase() === '0') {
      return positionArrowFromLeft;
    }
  };
  const getTextAlign = align => {
    if (align.toLowerCase() === 'left') {
      return textAlignLeft;
    } else if (align.toLowerCase() === 'right') {
      return textAlignRight;
    }
  };
  const handleClick = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  };
  const getFloaterClassName = () => {
    if (fadeOut) {
      return fadeOutComp;
    } else {
      return fadeInComp;
    }
  };
  return (
    <div className={alignToTopComponent()}>
      <div className={getFloaterClassName()}>
        <div className={getTextAlign(align)}>
          <div
            onKeyPress={() => {}}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            className={iconTextContainer}
          >
            <i className={icon} />
            <span>{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

BackToTop.propTypes = {
  text: PropTypes.string,
  align: PropTypes.string,
  icon: PropTypes.string,
  fadeOut: PropTypes.bool,
  position: PropTypes.string,
  fleft: PropTypes.string,
  fright: PropTypes.string,
  fbottom: PropTypes.string,
};

BackToTop.defaultProps = {
  text: '',
  align: 'right',
  icon: iconClass,
  fadeOut: false,
  position: 'static',
  fleft: '0',
  fright: '0',
  fbottom: '0',
};

export default withTheme(BackToTop);
