import React from 'react';
import { createFlag } from '../create-flag';

export const YEFlag = createFlag(
  'YE',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-nado3goid" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-wmzq0jdvh" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-7t8lp1rog" />
      </mask>
      <path id="mantine-7t8lp1rog" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-nado3goid)">
      <use fill="#f7fcff" xlinkHref="#mantine-7t8lp1rog" />
      <path fill="#e31d1c" d="M0 0h32v8H0z" mask="url(#mantine-wmzq0jdvh)" />
      <path fill="#272727" d="M0 16h32v8H0z" mask="url(#mantine-wmzq0jdvh)" />
    </g>
  </svg>
);
