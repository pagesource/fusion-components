import { css } from 'emotion';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

/*
  ** properties **
  * gap - defines gap between icons in pixels
  * iconWidthLarge -  max width of the icon in desktop/laptops/tablets
  * iconWidthMobile - max width of the icon in mobile devices
  * appleImage -  Image to be displaed in all laptops/desktops/tablets for apple store
  * androidImage - Image to be displaed in all laptops/desktops/tablets for android store
  * iosStoreClick - click function of apple store button
  * androidStoreClick - click function of android store button
*/

export default class AppstoreButton extends PureComponent {
  constructor(props) {
    super(props);
    const { gap, iconWidthLarge, iconWidthMobile } = this.props;
    this.getMobileOperatingSystemIphone = this.getMobileOperatingSystemIphone.bind(
      this
    );
    this.getMobileOperatingSystemAndroid = this.getMobileOperatingSystemAndroid.bind(
      this
    );
    this.AppleLogo = css`
      width: 100%;
      max-width: ${iconWidthMobile};
      height: auto;
      cursor: pointer;
      outline: none;
      margin-bottom: ${gap}px;
      @media (min-width: 768px) {
        max-width: ${iconWidthLarge};
        margin-bottom: 0;
        margin-right: ${gap}px;
      }
    `;
    this.AndroidLogo = css`
      width: 100%;
      max-width: ${iconWidthMobile};
      height: auto;
      cursor: pointer;
      outline: none;
      @media (min-width: 768px) {
        max-width: ${iconWidthLarge};
      }
    `;
    this.parent = css`
      display: flex;
      @media (min-width: 320px) {
        flex-direction: column;
      }
      @media (min-width: 768px) {
        flex-direction: row;
      }
    `;
    this.hide = css`
      display: none;
    `;
  }

  componentDidMount() {
    /*
      * check for the browser type
    */
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      this.getMobileOperatingSystemIphone('android');
      this.getMobileOperatingSystemAndroid('android');
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      this.getMobileOperatingSystemIphone('apple');
      this.getMobileOperatingSystemAndroid('apple');
    }
  }

  getMobileOperatingSystemIphone(agent = '') {
    /*
      * hide the icon when the browser is of android device
      * show the icon in all other devices and laptop/desktop
    */
    if (agent.toLowerCase() === 'android') {
      return this.hide;
    }
    return this.AppleLogo;
  }

  getMobileOperatingSystemAndroid(agent = '') {
    /*
      * hide the icon when the browser is of apple device
      * show the icon in all other devices and laptop/desktop
    */
    if (agent.toLowerCase() === 'android') {
      return this.hide;
    }
    return this.AndroidLogo;
  }

  render() {
    const {
      iosStoreClick,
      appleImage,
      androidStoreClick,
      androidImage,
    } = this.props;
    return (
      <div className={this.parent}>
        <div
          className={this.getMobileOperatingSystemIphone()}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
          onClick={iosStoreClick}
        >
          <img className={this.AppleLogo} src={appleImage} alt="apple" />
        </div>
        <div
          className={this.getMobileOperatingSystemAndroid()}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
          onClick={androidStoreClick}
        >
          <img className={this.AndroidLogo} src={androidImage} alt="android" />
        </div>
      </div>
    );
  }
}

AppstoreButton.propTypes = {
  iosStoreClick: PropTypes.func.isRequired,
  androidStoreClick: PropTypes.func.isRequired,
  appleImage: PropTypes.string,
  androidImage: PropTypes.string,
  gap: PropTypes.string,
  iconWidthLarge: PropTypes.string,
  iconWidthMobile: PropTypes.string,
};

AppstoreButton.defaultProps = {
  /*
    * gap signifies the gap between two icons
    * when in mobile the gap is vertical
    * when in large devices (e.g. desktop), the gap is horizontal
  */
  appleImage: 'http://i68.tinypic.com/161nu2u.png',
  androidImage: 'http://i66.tinypic.com/dylrbo.jpg',
  gap: '3',
  iconWidthLarge: 160,
  iconWidthMobile: 160,
};
