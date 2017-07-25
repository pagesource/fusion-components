import styled from 'styled-components';

const Progress = styled.progress.attrs({
  value: props => props.value
})`
  display: block;
  height: 4px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0px;
  width: 100%;
  background-color: #dee1e3;
`;

export default Progress;
