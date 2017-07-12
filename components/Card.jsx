
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from './Button';
import Rating from './Rating';
import './Card.css';

const Card = (props) => {
  const { cardData, theme } = props;
  const cardDetails = (cardData !== null) ? cardData : null;
  return (
    <div className="cardContainer">
      {cardDetails && cardDetails.map((card, index) =>
        <div className={classnames('card', `acss-theme-${theme}`, 'acss-background-secondary')} key={`key-${index}`}>
          <img src={card.image} alt={card.heading}/>
          <h2 children={card.heading} />
          <Rating value={4} />
          <p>{card.text}</p>
          <Button>Add to Cart</Button>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  /**
   * Card Data
  */
  cardData: PropTypes.arrayOf(PropTypes.shape({})),
  /**
  * Theme
  */
  theme: PropTypes.oneOf(['light', 'dark'])
};

Card.defaultProps = {
  theme: 'light'
};

export default Card;
