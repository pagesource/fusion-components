import styled from 'styled-components';

const PanelFooter = styled.header`
  padding: 8px;
  font-size: 14px;
  color: ${props => props.color};
  font-weight: 700;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export default PanelFooter;
