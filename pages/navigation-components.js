import React from "react";
import { ThemeProvider } from "theming";
import { Navbar, Pagination, StepperControl, Breadcrumb } from "../";
// --------page specific imports---------
import theme from "../theme";
// ---- global imports ----------
import Layout from "./components/Layout";

const NavigationComponent = () => {
  function breadCrumbClick(link) {
    if (typeof window !== "undefined") {
      window.alert(
        `Clicked on link ${link.name} with id ${
          link.id
        }. You can also provide your on-click functionality.`
      );
    }
  }

  return (
    <Layout>
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
            'link':'/recent',
            'submenu': [
              {
                "navName": "Facebook",
                "link": "/fb.com",
              },
              {
                "navName": "Twitter",
                "link": "/twitter.com",
              },
              {
                "navName": "Snapchat",
                "link": "/sc.com",
              }
            ]
          },
          {
            'navName': 'About Us',
            'link':'/about'
          },
          {
            'navName': 'Contact Us',
            'link':'/Contact'
          }],
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
          <h3>Breadcumbs </h3>
          <Breadcrumb onClick={breadCrumbClick} />
          <pre>{`<Breadcrumb />
            `}</pre>
        </div>
      </ThemeProvider>
    </Layout>
  );
};

export default NavigationComponent;
