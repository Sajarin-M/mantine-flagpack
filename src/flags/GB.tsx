import React from 'react';
import { createFlag } from '../create-flag';

export const GBFlag = createFlag(
  'GB',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-l8r0lrpms" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-l8r0lrpms)">
      <path fill="#f7fcff" d="M0 0h32v24H0z" />
      <path fill="#f50302" d="M18 0v10h14v4H18v10h-4V14H0v-4h14V0z" />
    </g>
  </svg>
);