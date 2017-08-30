import { css } from "emotion";
import { withTheme } from "theming";
import PropTypes from "prop-types";

import Button from "./Button";
import Rating from "./Rating";
import Panel from "./Panel";
// import "./Card.css";

const cardStyles = css`
  text-align: center;
  flex:1;
  background: #fff;
  padding:1rem;
  margin: auto;
  width:250px;
  height:350px;

`;

const cardContainer = css`

  display: flex;
  flex-direction:row;
  width:100%;
`;

const Card = props => {
  const { cardData } = props;
  const cardDetails = cardData !== null ? cardData : null;
  return (
    <div className={cardContainer}>
      {cardDetails &&
        cardDetails.map((card, index) =>
          <Panel className={cardStyles} key={`key-${index}`}>
            <img src={card.image} alt={card.heading} />
            <h2 children={card.title} />
            <Rating value={card.rating} />
            <p>
              {card.description}
            </p>
            <Button>Add to Cart</Button>
          </Panel>
        )}
    </div>
  );
};

Card.propTypes = {
  /**
   * Card Data
  */
  cardData: PropTypes.arrayOf(PropTypes.shape({}))
};

export default withTheme(Card);
