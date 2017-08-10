import {css} from 'emotion';
import { withTheme } from 'theming'
import PropTypes from 'prop-types';

import Button from './Button';
import Rating from './Rating';
import './Card.css';

const cardContainer=css`

  display: flex;
  width:100%;
`

const card=csss`
  text-align: center;
  flex:1;
  background: #fff;
  padding:1rem;
  margin: 1rem;

`


const Card = (props) => {
  const { cardData} = props;
  const cardDetails = (cardData !== null) ? cardData : null;
  return (
    <div className={cardContainer}>
      {cardDetails && cardDetails.map((card, index) =>
        <div className={card} key={`key-${index}`}>
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


};


export default withTheme(Card);
