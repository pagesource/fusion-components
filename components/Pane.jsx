import React from 'react';

const Pane = (props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
}

export default Pane;
