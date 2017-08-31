import React from 'react';
import { ThemeProvider } from 'theming';
import { CardGrid, Panel, theme } from '../';
import Layout from './components/Layout';

const ContentComponent = () => (<Layout>
  <ThemeProvider theme={theme}>
    <div>
      <h2>Content Components</h2>
      <p>
		This section contains components that can be used to display content.
	  </p>
      <h3>Panel </h3>
      <Panel>this is a panel</Panel>
      <pre>{`<Panel>this is a panel</Panel>
          `}</pre>
      <h3>Cards</h3>
      <CardGrid />
      <pre>{`const cardData = [{
		index: "1",
		  title: "Tasty Food",
		  description: " lorem lipsum do re me",
		  rating: 4,
		  image: "http://lorempixel.com/250/150/food/"
		},
		{
		  index: "2",
		  title: "Amazing Food",
		  description: " Amazing lorem lipsum do re me",
		  rating: 5,
		  image: "http://lorempixel.com/250/150/food/"
		},

		{
		  index: "3",
		  title: "Good Food",
		  description: " Good  lipsum do re me",
		  rating: 3,
		  image: "http://lorempixel.com/250/150/food/"
		}];
        <Card cardData={cardData} />
          `}</pre>
    </div>
  </ThemeProvider>
</Layout>);

export default ContentComponent;
