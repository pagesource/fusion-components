import styled from 'react-emotion';

const Truncate = styled('p')`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
  position: relative;
  width: 120px;
`;

export default Truncate;
