import React, { PropTypes } from 'react';
import classnames from 'classnames';
// ImageLink Style
import './ImageLink.css';

const ImageLink = (props) => {
   const { src, alt, url, imgWidth } = props;

  	return (
		<div className={classnames('image-link-container')}>
			<a href={url}>
				<img
				  src={src}
				  alt={alt}
				  width={imgWidth}
				  className="image-link"
				/>
			</a>
		</div>    
  	);
};  

ImageLink.propTypes = { 
  /**
  * image source
  */		
  src: PropTypes.string,
  /**
  * image Alternative Text
  */
  alt: PropTypes.string,
  /**
  * Link URL
  */
  url: PropTypes.string,
  /**
  * Image width
  */
  imgWidth: PropTypes.number
};

ImageLink.defaultProps = {
  src: 'http://placehold.it/256x192/',
  alt: '',
  url: 'http://google.com',
  imgWidth: 256
};

export default ImageLink;