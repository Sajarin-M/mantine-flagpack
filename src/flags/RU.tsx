import React from 'react';
import { createFlag } from '../create-flag';

export const RUFlag = createFlag(
  'RU',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-kwry5ffun" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-ekk7jbp2h" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-5thprkn0f" />
      </mask>
      <path id="mantine-5thprkn0f" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-kwry5ffun)">
      <use fill="#3d58db" xlinkHref="#mantine-5thprkn0f" />
      <path fill="#f7fcff" d="M0 0h32v8H0z" mask="url(#mantine-ekk7jbp2h)" />
      <path fill="#c51918" d="M0 16h32v8H0z" mask="url(#mantine-ekk7jbp2h)" />
    </g>
  </svg>
);
