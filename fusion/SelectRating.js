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
      backgroundColor: 'transparent'
    },
};

class SelectRating extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      count: this.props.value
    }
  }

  handleClick(ratingGiven){
    this.setState({
      count: ratingGiven.index + 1
    })
  }
  render(){
    let stars = Array.from({ length: 5 }, (a, b) => b), 
        star="";
    const newRating = this.state.count;
    for (let index of stars) {
      star = index < newRating ? star="★" : star="☆";
      stars[index] =  (<a href='javascript:void(0);' onClick={this.handleClick.bind(this,{index})} key={index} style={sx.star}>
                        <span>{star} </span>
                      </a>)
    }
    return (<div>{stars}</div>)
  }
};

SelectRating.propTypes = {
  value: PropTypes.number
};

export default SelectRating;
