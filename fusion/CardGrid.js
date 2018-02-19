import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import { withTheme } from 'theming';

import Card from './Card';

const cardGrid = css`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const cardData = [
  {
    index: '1',
    title: 'Tasty Food',
    description: ' lorem lipsum do re me',
    rating: 4,
    image: 'http://lorempixel.com/250/150/food/',
  },
  {
    index: '2',
    title: 'Amazing Food',
    description: ' Amazing lorem lipsum do re me',
    rating: 5,
    image: 'http://lorempixel.com/250/150/food/',
  },

  {
    index: '3',
    title: 'Good Food',
    description: ' Good  lipsum do re me',
    rating: 3,
    image: 'http://lorempixel.com/250/150/food/',
  },
];

const CardGrid = () => (
  <div className={cardGrid}>
    <Card cardData={cardData} />
  </div>
);

Card.propTypes = {
  /**
   * Card Data
   */
  cardData: PropTypes.arrayOf(PropTypes.shape({})),
};

export default withTheme(CardGrid);
