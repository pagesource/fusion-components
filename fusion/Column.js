import {css} from 'emotion';

const columnStyle = css`
  flex: 1 1 auto;
  margin-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  color: #fff;
  position: relative;
`;


const Column = (props) => {
  return (
		<Column className={columnStyle}> </Column>

  );
};

export default Column;
