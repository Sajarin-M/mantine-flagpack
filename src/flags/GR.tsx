import React from 'react';
import { createFlag } from '../create-flag';

export const GRFlag = createFlag(
  'GR',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-u91ed1wf5" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-u91ed1wf5)">
      <path fill="#f7fcff" d="M0 0h32v24H0z" />
      <g fill="#4564f9">
        <path d="M32 15.943V18.9H0v-2.957zm0-5.128v2.957H0v-2.957zM32 5.5v2.957H0V5.5zM0 0h32v3H0zm0 21h32v3H0z" />
        <path d="M0 0h15v13.8H0z" />
      </g>
      <path fill="#f7fcff" d="M6 0h3v5.504h6v2.935H9V14.5H6V8.439H0V5.504h6z" />
    </g>
  </svg>
);
