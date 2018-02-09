import { css } from 'emotion';
import React from 'react';
import { withTheme } from 'theming';

import Steps from './Steps';

const stepper = css`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const steps = [
  {
    index: '1',
    active: true,
    icon:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwV4k_3VfOfuZYYw_pITr2HGQvHYKOoj_X8CANf8Uo-SxaaonKu12_Q',
    title: 'Shipping',
    description: 'Choose your shipping options',
  },
  {
    index: '2',
    active: true,
    icon:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZTh7GKJZuz9pCKOJL_AHK3UHjK_oCSsqg8G16GjHQVUsufChkg',
    title: 'Billing',
    description: 'Enter billing information',
  },
  {
    index: '3',
    active: true,
    icon:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXc_XMubtnNciXpSJBGJMNj_QLMAX6TwV99LgiXWBaXKsEinXFQ',
    title: 'Confirm Order',
    description: 'Proceed to order confirmation',
  },
];

const Stepper = () => (
  <div className={stepper}>
    <Steps steps={steps} />
  </div>
);

export default withTheme(Stepper);
