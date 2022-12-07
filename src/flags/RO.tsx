import React from 'react';
import { createFlag } from '../create-flag';

export const ROFlag = createFlag(
  'RO',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-lv0rolkrp" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-lv0rolkrp)">
      <path fill="#fbcd17" d="M10 0h12v24H10z" />
      <path fill="#e11c1b" d="M22 0h10v24H22z" />
      <path fill="#2e42a5" d="M0 0h10v24H0z" />
    </g>
  </svg>
);
