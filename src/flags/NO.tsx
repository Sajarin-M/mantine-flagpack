import React from 'react';
import { createFlag } from '../create-flag';

export const NOFlag = createFlag(
  'NO',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-baeipwkwy" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-meg2qc45b" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-fqz5wsyiw" />
      </mask>
      <path id="mantine-fqz5wsyiw" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-baeipwkwy)">
      <use fill="#e31d1c" xlinkHref="#mantine-fqz5wsyiw" />
      <g fill="#2e42a5" stroke="#f7fcff" strokeWidth="2" mask="url(#mantine-meg2qc45b)">
        <path d="M15-1V9h18v6H15v10H9V15H-1V9H9V-1z" />
      </g>
    </g>
  </svg>
);