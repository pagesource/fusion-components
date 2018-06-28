import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const AppstoreButton = ({ text }) => {
  const appleStoreCustom = css`
    background-image: url(http://i68.tinypic.com/161nu2u.png);
    background-repeat: no-repeat;
    width: 165px;
    height: 58px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  `;
  const androidStoreCustom = css`
    background-image: url(http://i66.tinypic.com/dylrbo.jpg);
    background-repeat: no-repeat;
    width: 153px;
    height: 52px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  `;
  const responsiveImage = css`
    width: 100%;
    max-width: 400px;
    height: auto;
  `;
  return (
    <div>
      <button className={appleStoreCustom}>{text}</button>
      <button className={androidStoreCustom}>{text}</button>
      <div className={responsiveImage}>
        <img
          className={responsiveImage}
          src="http://i66.tinypic.com/dylrbo.jpg"
          alt="apple"
        />
      </div>
      <div className={responsiveImage}>
        <img
          className={responsiveImage}
          src="http://i66.tinypic.com/dylrbo.jpg"
          alt="apple"
        />
      </div>
    </div>
  );
};

AppstoreButton.propTypes = {
  text: PropTypes.string,
};

AppstoreButton.defaultProps = {
  text: '',
};

export default withTheme(AppstoreButton);
