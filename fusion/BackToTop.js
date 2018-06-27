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
const BackToTop = ({ text, align, icon }) => {
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
  return (
    <div>
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
  );
};

BackToTop.propTypes = {
  text: PropTypes.string,
  align: PropTypes.string,
  icon: PropTypes.string,
};

BackToTop.defaultProps = {
  text: '',
  align: 'right',
  icon: iconClass,
};

export default withTheme(BackToTop);
