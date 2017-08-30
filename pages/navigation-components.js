import React from 'react';
import { ThemeProvider } from 'theming';
import { Navbar, Pagination, StepperControl } from '../';
// --------page specific imports---------
import theme from '../theme';
// ---- global imports ----------
import Layout from './components/Layout';

export default () => (<Layout>
  <ThemeProvider theme={theme}>
    <div>
      <h2>Navigation Components</h2>
      <h3>Nav bar</h3>
      <Navbar />
      <pre>{`const = NavList: [
		{
		  'navName': 'Home',
		  'link':'/home'
		},
		{
		  'navName':'Recent',
		  'link':'/recent'
		},
		{
		  'navName': 'About Us',
		  'link':'/about'
		},
		{
		  'navName': 'Contact Us',
		  'link':'/Contact'}
		],
          <Navbar NavLinks={NavLinks}/>
          `}</pre>
      <h3>Stepper Controls </h3>
      <StepperControl />
      <pre>{`<StepperControl />
          `}</pre>
      <h3>Pagination </h3>
      <Pagination />
      <pre>{`<Pagination />
          `}</pre>
    </div>
  </ThemeProvider>
</Layout>);

