import React from 'react';
import { ThemeProvider } from 'theming';
import { Loader, ProgressBar, ProgressCircle, Ripples, theme } from '../';
import Layout from './components/Layout';

const ContentComponent = () => (<Layout>
  <ThemeProvider theme={theme}>
    <div>
      <h2>Progress & Activity</h2>
      <p>
		This section contains a collection of progress bars and spinner
		components .
	  </p>
      <h3>Circular Loader </h3>
      <Loader />
      <pre>{`  <Loader />
          `}</pre>
      <h3>Rippling Loader</h3>
      <Ripples />
      <pre>{`
       <Ripples/>
          `}</pre>

      <h3>Progress Bar</h3>
      <ProgressBar value={25} />
      <pre>{`
       <ProgressBar value={25}/>
          `}</pre>

      <h3>Progress Circle</h3>
      <ProgressCircle value={65} />
      <pre>{`
       <ProgressCircle value={65}/>
          `}</pre>
    </div>
  </ThemeProvider>
</Layout>);

export default ContentComponent;
