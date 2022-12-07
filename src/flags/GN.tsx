import React from 'react';
import { createFlag } from '../create-flag';

export const GNFlag = createFlag(
  'GN',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-mi6dfq3ks" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-mi6dfq3ks)">
      <path fill="#fbcd17" d="M10 0h12v24H10z" />
      <path fill="#0b9e7a" d="M22 0h10v24H22z" />
      <path fill="#e11c1b" d="M0 0h10v24H0z" />
    </g>
  </svg>
);