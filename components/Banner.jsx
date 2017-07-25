import styled from 'styled-components';

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.picUrl || 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20' });
`;

export default Banner;
