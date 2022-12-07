import React from 'react';
import { createFlag } from '../create-flag';

export const BHFlag = createFlag(
  'BH',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-y9nj828c5" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-y9nj828c5)">
      <path fill="#e31d1c" d="M0 0h32v24H0z" />
      <path
        fill="#f7fcff"
        d="M0 0h6.8L12 2 6.8 4 12 6 6.8 8l5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2H0z"
      />
    </g>
  </svg>
);