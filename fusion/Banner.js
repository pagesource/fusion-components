import { css } from 'emotion';
import PropTypes from 'prop-types';
import { withTheme } from 'theming';

const bannerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-size: cover;
  background-position: center;
  background-image: url(${ props => props.picUrl });
`;

const Banner = (props) => (<img src={props.src} className={bannerStyle}/>);

/* Props Check */
Banner.propTypes = {
  /**
   * Image URL
   */
  picUrl: PropTypes.string
};

/* Default Props */
Banner.defaultProps = {
  picUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
};

export default withTheme(Banner);
