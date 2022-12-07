import React from 'react';
import { createFlag } from '../create-flag';

export const PLFlag = createFlag(
  'PL',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-gigiqey4p" fill="#fff">
        <rect width="32" height="24" fillRule="evenodd" rx="2" />
      </mask>
      <mask id="mantine-b87e9ekf2" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-5l5dp8ndi" />
      </mask>
      <path id="mantine-5l5dp8ndi" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-gigiqey4p)">
      <use fill="#f7fcff" xlinkHref="#mantine-5l5dp8ndi" />
      <path fill="#c51918" d="M0 12h32v12H0z" mask="url(#mantine-b87e9ekf2)" />
    </g>
  </svg>
);