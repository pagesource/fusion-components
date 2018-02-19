import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';

import Button from './Button';
import Panel from './Panel';
import Rating from './Rating';

const cardStyles = css`
  text-align: center;
  flex: 1;
  background: #fff;
  padding: 1rem;
  margin: auto;
  width: 250px;
  height: 350px;
`;

const cardContainer = css`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Card = ({ cardData }) => (
  <div className={cardContainer}>
    {!!cardData &&
      cardData.map(({ image, heading, title, rating, description, index }) => (
        <Panel className={cardStyles} key={index}>
          <img src={image} alt={heading} />
          <h2>{title}</h2>
          <Rating value={rating} />
          <p>{description}</p>
          <Button>Add to Cart</Button>
        </Panel>
      ))}
  </div>
);

Card.propTypes = {
  /**
   * Card Data
   */
  cardData: PropTypes.arrayOf(PropTypes.shape({})),
};
Card.defaultProps = {
  cardData: [],
};

export default withTheme(Card);
