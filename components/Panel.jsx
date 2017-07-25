import styled from 'styled-components';

const Panel = styled.div`
  overflow: hidden;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  color: ${props => props.color};
`;

export default Panel;
