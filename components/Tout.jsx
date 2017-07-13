import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Tout.css';

const Tout = (props) => {
  const { imgURL, imgAlt, destination, headline, theme } = props;

  return (
    <div className={classnames('tout', `acss-theme-${theme}`)}>
      <a href={destination}>
        <img src={imgURL} alt={imgAlt} />
        <div className="tout-copy">
          <h3>{headline}</h3>
        </div>
      </a>
    </div>
  );
};

Tout.propTypes = {
  /**
  * Tout Image URL
  */
  imgURL: PropTypes.string.isRequired,
  /**
  * Tout Image Alt
  */
  imgAlt: PropTypes.string,
  /**
  * Tout destination URL
  */
  destination: PropTypes.string,
  /**
  * Tout headline
  */
  headline: PropTypes.string,
  /**
  * Tout theme
  */
  theme: PropTypes.string
};

Tout.defaultProps = {
  theme: 'light',
  destination: '#'
};

export default Tout;

