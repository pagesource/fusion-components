import styled from 'styled-components';

const Link = styled.a.attrs({
  href: props => props.href
})`
  color: violet;
  text-decoration: none;
`;

export default Link;
