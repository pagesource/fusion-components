import styled from 'styled-components';

const Text = styled.p`
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  font-size: ${props => props.size}px;
`;

export default Text;
