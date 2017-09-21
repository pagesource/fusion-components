import { css } from 'emotion';
import Carousel from 'react-slick';
import React, { PureComponent } from 'react';

// const Slider = styled.input({
//   type: 'range',
//   name: props => props.name,
//   min: props => props.min,
//   max: props => props.max,
//   defaultValue: props => props.defaultValue,
//   disabled: props => props.disabled,
//   onChange: props => props.onChange,
// })`
//   -webkit-appearance: none;
//   background-color: #cccccc;;
//   height: 5px;
//   border-radius: 5px;
//   &::-webkit-slider-thumb {
//        -webkit-appearance: none;
//       background-color: #fff;
//       width: 1rem;
//       height: 1.5rem;
//       border: 1px solid #ccc;
//       border-radius: 10px;
//   }
//   :disabled {
//        cursor: not-allowed;
//   }
// `;

const props = {
  totalSlides: [1,2,3,4,5,6],
  imageUrl: 'https://unsplash.it/560/420/?random'
}

const carouselComponent = css`
  margin: 0 auto;
  padding: 40px;
  width: 80%;
  color: #333;
  background: #419be0;
`;
const dotsStyle = css`
width: 80%;
box-sizing: border-box;
`;

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };

this.settings = {
    infinite: false,
    dots: true
  };
}

  componentDidMount() {
    console.log('slider loading')
  }


  /**
   * setActiveSlide - Set active slide in mobile view
   * @param  {number} index Index of the item
  */
  // setActiveSlide = index => {
      
  //   const activeSlide = ++index;
  //   const disableNext = ( activeSlide === this.state.totalSlide );
  //   const disablePrev = ( activeSlide === 1 );

  //   this.setState({
  //       activeSlide,
  //       disableNext,
  //       disablePrev
  //   });
  // }
      
  /**
   * nextSlide - Slide next
  */
  // nextSlide = () => {

  //     const tempObject = {
  //         linkText: `nextSlide`,
  //         componentName: 'MediaTiles'
  //     };

  //     analytics.customClicks( tempObject );
  //     this.slider.slickNext();
  // }

  /**
   * previousSlide - Slide Previous
  */
  // previousSlide = () => {

  //     const tempObject = {
  //         linkText: `PreviousSlide`,
  //         componentName: 'MediaTiles'
  //     };

  //     analytics.customClicks( tempObject );
  //     this.slider.slickPrev();
  // }

  render() {

    return (<div className={carouselComponent}>
      <Carousel { ...this.settings }>
        { props.totalSlides.map ( (i) => (
          <img alt="img" key = { i }
            className = { `image-${i}` }
            src = { props.imageUrl }
          />
        ))}
      </Carousel>
    </div>);
  }
}

// /* Props Check */
// Slider.propTypes = {
//  /**
//   * name
//   */
//  name: PropTypes.string,
//  /**
//   * min value
//   */
//  min: PropTypes.number,
//  /**
//   * max value
//   */
//  max: PropTypes.number,
//  /**
//   * defaultValue
//   */
//  defaultValue: PropTypes.number,
//  /**
//   * onChange
//   */
//  onChange: PropTypes.func,
//  /**
//   * Disabled
//   */
//  disabled: PropTypes.bool
// };
//
// /* Default Props */
// Slider.defaultProps = {
//  name: 'slider',
//  min: 1,
//  max: 10,
//  defaultValue: 1,
//  disabled: false
// };

export default Slider;
