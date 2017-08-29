import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import {theme} from './themes';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '{props.theme.primaryColor}',
      borderColor: '{props.theme.buttonColor}',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(131, 145, 146  ,0.4)',
      hoverBorderColor: 'rgba(52, 73, 94,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default React.createClass({
  displayName: 'BarChart',

  render() {
    return (
      <div>
        <HorizontalBar data={data} />
      </div>
    );
  }
});