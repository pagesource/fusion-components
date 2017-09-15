import styled from 'emotion/react';
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
  totalSlides: 6,
  imageUrl: 'http://via.placeholder.com/650x400'
}

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };

    this.settings = {
      accessibility: true,
      dots: true,
      infinite: false,
      arrows: true,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1900,
              settings: {
                  centerMode: false
              }
          },
          {
              breakpoint: 769,
              settings: {
                  centerMode: true,
                  centerPadding: '150px'
              }
          },
          {
              breakpoint: 376,
              settings: {
                  centerMode: true,
                  centerPadding: '34px'
              }
          }
      ],
      afterChange: this.setActiveSlide
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

  getSliderMarkup = () => {

    return (
      <Carousel ref={ c => this.slider = c } { ...this.settings }>
        { props.totalSlides.map ( (slide, i) => {
          <img key = { i }
               className = { `image-${i}` }
               src = { props.imageUrl }
          />
        })}
      </Carousel>
    )

  }

  render() {
    return (<div className={`carousel-component`}>
              { this.getSliderMarkup }
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
