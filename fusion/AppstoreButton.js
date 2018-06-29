import { css } from 'emotion';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class AppstoreButton extends PureComponent {
  constructor(props) {
    super(props);
    this.getMobileOperatingSystemIphone = this.getMobileOperatingSystemIphone.bind(
      this
    );
    this.getMobileOperatingSystemAndroid = this.getMobileOperatingSystemAndroid.bind(
      this
    );
    this.AppleLogo = css`
      width: 100%;
      max-width: 160px;
      height: auto;
      cursor: pointer;
      outline: none;
      margin-bottom: ${this.props.gap}px;
      @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: ${this.props.gap}px;
      }
    `;
    this.AndroidLogo = css`
      width: 100%;
      max-width: 160px;
      height: auto;
      cursor: pointer;
      outline: none;
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
};
