import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'theming';
import theme from '../theme';

const Tabs = ({ tabData, onClick, theme }) => {
  const tabList = css`
    border-bottom: 1px solid ${theme.tabBorderColor};
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  `;

  const tab = css`
    margin-bottom: -1px;
  `;

  const tabLink = css`
    display: block;
    padding: ${theme.tabPadding};
    text-decoration: none;
    color: ${theme.tabColor};
    border: 1px solid rgba(0, 0, 0, 0);
    border-top-right-radius: ${theme.tabBorderRadius};
    border-top-left-radius: ${theme.tabBorderRadius};
  `;

  const activeTabLink = css`
    composes: ${tabLink};
    background-color: ${theme.tabBackgroundColor};
    border-color: ${theme.tabBorderColor} ${theme.tabBorderColor}
      rgba(0, 0, 0, 0);
  `;

  const tabPanel = css`
    display: none;
    padding: ${theme.tabPanelPadding};
  `;

  const tabPanelActive = css`
    display: block;
    padding: ${theme.tabPanelPadding};
  `;

  const handleClick = selectedTabIndex => () => {
    onClick(selectedTabIndex);
  };

  const getActiveTabStyle = selected => {
    if (selected) {
      return activeTabLink;
    }
    return tabLink;
  };

  const getActivePanelStyle = selected => {
    if (selected) {
      return tabPanelActive;
    }
    return tabPanel;
  };

  return (
    <div>
      <ul className={tabList}>
        {!!tabData &&
          tabData.map(({ title, selected }, i) => (
            <li key={title} className={tab}>
              <a
                key={title}
                href={`#tab-panel${i}`}
                className={getActiveTabStyle(selected)}
                onClick={handleClick(i)}
              >
                {title}
              </a>
            </li>
          ))}
      </ul>
      {!!tabData &&
        tabData.map(({ title, content, selected }, i) => (
          <div
            key={title}
            id={`tab-panel${i}`}
            className={getActivePanelStyle(selected)}
          >
            {content}
          </div>
        ))}
    </div>
  );
};

Tabs.propTypes = {
  tabData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.string),
  // selectedTab: PropTypes.number,
};

Tabs.defaultProps = {
  tabData: [
    {
      title: 'Tab1',
      content: 'This is content for first tab',
      selected: false,
    },
    {
      title: 'Tab2',
      content: 'This is content for second tab',
      selected: true,
    },
    {
      title: 'Tab3',
      content: 'This is content for third tab',
      selected: false,
    },
  ],
  // selectedTab: 1,
  theme,
};

export default withTheme(Tabs);
