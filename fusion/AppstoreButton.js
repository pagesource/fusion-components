import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

const AppstoreButton = ({
  iosStoreClick,
  androidStoreClick,
  appleImage,
  androidImage,
  gap,
}) => {
  const AppleLogo = css`
    width: 100%;
    max-width: 160px;
    height: auto;
    cursor: pointer;
    margin-right: ${gap}px;
  `;
  const AndroidLogo = css`
    width: 100%;
    max-width: 160px;
    height: auto;
    cursor: pointer;
  `;
  const parent = css`
    display: flex;
  `;
  return (
    <div className={parent}>
      <div
        className={AppleLogo}
        onKeyPress={() => {}}
        role="button"
        tabIndex={0}
        onClick={iosStoreClick}
      >
        <img className={AppleLogo} src={appleImage} alt="apple" />
      </div>
      <div
        className={AndroidLogo}
        onKeyPress={() => {}}
        role="button"
        tabIndex={0}
        onClick={androidStoreClick}
      >
        <img className={AndroidLogo} src={androidImage} alt="android" />
      </div>
    </div>
  );
};

AppstoreButton.propTypes = {
  iosStoreClick: PropTypes.func.isRequired,
  androidStoreClick: PropTypes.func.isRequired,
  appleImage: PropTypes.string,
  androidImage: PropTypes.string,
  gap: PropTypes.string,
};

AppstoreButton.defaultProps = {
  appleImage: 'http://i68.tinypic.com/161nu2u.png',
  androidImage: 'http://i66.tinypic.com/dylrbo.jpg',
  gap: '3',
};

export default withTheme(AppstoreButton);
