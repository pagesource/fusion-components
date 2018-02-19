import React from 'react';
import PropTypes from 'prop-types';

const sx = {
  star: {
    position: 'relative',
    fontSize: 'inherit',
    textDecoration: 'none',
    lineHeight: 1,
    margin: 0,
    marginRight: '.25em',
    padding: '.25em 0',
    border: 0,
    color: 'blue',
    backgroundColor: 'transparent',
  },
};

class SelectRating extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.value,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const index = event.target.dataset.index;
    this.setState({
      count: index + 1,
    });
  }
  render() {
    const stars = Array.from({ length: 5 }, (a, b) => b);
    let star = '';
    const newRating = this.state.count;
    for (const index of stars) {
      star = index < newRating ? (star = '★') : (star = '☆');
      stars[index] = (
        <button
          data-index={index}
          onClick={this.handleClick}
          key={index}
          style={sx.star}
        >
          <span>{star} </span>
        </button>
      );
    }
    return <div>{stars}</div>;
  }
}

SelectRating.propTypes = {
  value: PropTypes.number,
};
SelectRating.defaultProps = {
  value: '',
};

export default SelectRating;
