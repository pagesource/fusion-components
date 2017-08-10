import {css} from 'emotion';

const Truncate = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
  position: relative;
`;

export default Truncate;
