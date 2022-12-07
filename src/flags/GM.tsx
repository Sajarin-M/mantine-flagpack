import React from 'react';
import { createFlag } from '../create-flag';

export const GMFlag = createFlag(
  'GM',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-5khkuzrty" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-5khkuzrty)">
      <path fill="#5eaa22" d="M0 16h32v6a2 2 0 01-2 2H2a2 2 0 01-2-2z" />
      <path fill="#e31d1c" d="M2 0h28a2 2 0 012 2v6H0V2a2 2 0 012-2z" />
      <path fill="#3d58db" stroke="#fff" strokeWidth="3" d="M33.5 8.5v7h-35v-7z" />
    </g>
  </svg>
);
