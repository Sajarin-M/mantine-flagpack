import React from 'react';
import { createFlag } from '../create-flag';

export const SJFlag = createFlag(
  'SJ',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-dwwuxvf61" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-g60a5tm9s" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-24qaoui82" />
      </mask>
      <path id="mantine-24qaoui82" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-dwwuxvf61)">
      <use fill="#e31d1c" xlinkHref="#mantine-24qaoui82" />
      <g fill="#2e42a5" stroke="#f7fcff" strokeWidth="2" mask="url(#mantine-g60a5tm9s)">
        <path d="M15-1V9h18v6H15v10H9V15H-1V9H9V-1z" />
      </g>
    </g>
  </svg>
);
