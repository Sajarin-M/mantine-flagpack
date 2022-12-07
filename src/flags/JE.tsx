import React from 'react';
import { createFlag } from '../create-flag';

export const JEFlag = createFlag(
  'JE',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <filter id="mantine-4iu06x9i9" width="100%" height="100%" x="0%" y="0%">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feColorMatrix
          in="shadowOffsetOuter1"
          values="0 0 0 0 0.03137255 0 0 0 0 0.36862746 0 0 0 0 0 0 0 0 0.28 0"
        />
      </filter>
      <path
        id="mantine-0hrwj2j5v"
        d="M2.994 0c.174.175.224.436.153.785.363-.152.545-.076.545.229-.364.066-.545.183-.545.35 0 .25.124.409.404.409.116 0 .23-.02.344-.06a.261.261 0 01-.148-.227c0-.146.138-.264.307-.264s.307.118.307.264c0 .116-.086.214-.206.25.082.132.229.197.439.197.398 0 .345-.658.566-.658s1.134-.488.721-.261c-.275.15-.515.726-.721 1.724-.809-.282-1.531-.422-2.167-.422v-.001l-.241.007c-.576.031-1.217.17-1.925.416C.621 1.74.381 1.165.106 1.014c-.413-.227.5.26.721.26.22 0 .168.659.567.659.21 0 .356-.065.44-.196-.122-.037-.208-.135-.208-.25 0-.147.137-.265.307-.265.17 0 .307.118.307.264a.26.26 0 01-.146.226c.112.04.226.06.342.06.28 0 .404-.158.404-.409 0-.166-.181-.283-.545-.35 0-.304.182-.38.545-.228-.071-.35-.02-.61.152-.783L2.994 0z"
      />
      <mask id="mantine-me152nez7" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-me152nez7)">
      <g fill="#f7fcff">
        <path d="M0 0h32v24H0z" />
        <path stroke="#e31d1c" strokeWidth="2.7" d="M-4.75.006L15.747 12.4-4.75 24.794z" />
        <path stroke="#e31d1c" strokeWidth="2.7" d="M36.949.055L15.692 12.4l21.257 12.345z" />
      </g>
      <g transform="translate(12.8 2)">
        <path
          fill="#e31d1c"
          d="M.875 2.703c-.573 2.532.13 4.285 2.106 5.257 1.897-1.034 2.633-2.786 2.207-5.257-.815-.273-1.547-.409-2.195-.409-.648 0-1.354.136-2.118.409z"
        />
        <path
          fill="#ffd100"
          d="M1.182 3.499c.212-.094.37-.094.474 0 .157.14.286-.012.286-.097 0-.084.25-.375.25-.14s-.078.37.14.37c.22 0 1.206-.326 1.443-.23.236.097.417.073.357-.066-.06-.138-.214-.224-.512-.149-.298.076-.227.15-.485.15-.257 0-.543-.074-.543-.074s.08-.124.374-.036.699-.11.809-.11c.11 0 .413-.005.443.07.03.076.213.145.074.215-.14.07-.37.115-.212.205.159.09.523.072.54.166.018.094.19.234.121.234s-.194.132-.31.092-.131-.076-.02-.108c.112-.033.111-.17.02-.17s-.048.048-.258 0c-.21-.048-.487-.101-.47 0 .016.101.153.257-.1.278s-.37.104-.419.037c-.049-.067-.224-.157-.086-.185s.27.097.32.076c.049-.02.162-.032.067-.119-.094-.087-.25-.138-.105-.203.144-.066.03-.067-.245.068-.274.135-.427.25-.668.234-.241-.016-.331.005-.409-.016-.077-.022-.455.242-.563.175-.109-.067-.46-.093-.397-.175.064-.083.148-.125.243-.083s.188.085.252.043.247-.188.201-.217c-.046-.03-.001-.127-.263-.127s-.354.109-.416.04c-.042-.046-.02-.095.067-.148zm.262 1.248c.186-.083.325-.083.417 0 .138.123.25-.01.25-.085 0-.074.22-.33.22-.123 0 .208-.068.325.124.325.193 0 1.06-.287 1.268-.202.208.085.367.064.314-.058-.052-.121-.188-.197-.45-.131s-.2.131-.426.131-.478-.065-.478-.065.071-.109.33-.031.613-.096.71-.096c.097 0 .364-.005.39.061.026.066.187.127.065.189-.123.062-.325.1-.186.18s.46.064.475.146c.015.082.167.205.106.205s-.171.117-.274.081c-.102-.035-.114-.066-.016-.095.098-.028.097-.149.016-.149s-.041.042-.226 0c-.184-.042-.428-.089-.413 0 .014.09.134.226-.087.244-.222.018-.326.092-.369.033-.043-.06-.197-.138-.076-.163.121-.025.237.086.28.068.045-.019.144-.029.06-.105-.082-.077-.219-.122-.092-.18s.027-.058-.215.061c-.241.119-.376.22-.587.205-.212-.014-.292.005-.36-.014s-.4.213-.495.154c-.096-.059-.404-.081-.349-.154s.13-.11.213-.072c.083.037.166.074.222.037s.218-.165.177-.19c-.04-.026-.001-.112-.232-.112s-.311.096-.366.035c-.036-.04-.016-.084.06-.13zm.37 1.266c.141-.062.246-.062.316 0 .105.094.19-.007.19-.064 0-.056.167-.25.167-.093s-.052.246.094.246.804-.217.961-.153c.158.064.279.049.239-.044s-.143-.15-.342-.099c-.198.05-.151.1-.323.1-.171 0-.362-.05-.362-.05s.054-.082.25-.024c.195.06.465-.072.538-.072.074 0 .276-.004.296.046.02.05.142.096.05.143-.094.047-.247.077-.142.137.106.06.348.048.36.11.012.063.127.156.08.156-.045 0-.129.088-.207.062-.077-.027-.086-.05-.012-.072s.074-.113.012-.113-.031.032-.17 0c-.14-.032-.326-.068-.315 0 .011.067.102.17-.066.185-.168.013-.246.069-.28.024-.032-.045-.149-.104-.057-.123.092-.02.18.065.213.051.033-.014.108-.021.045-.08-.062-.057-.166-.092-.07-.135.096-.044.02-.045-.163.046-.183.09-.285.166-.445.155-.161-.01-.221.004-.273-.01-.052-.015-.303.16-.376.116s-.306-.062-.264-.116c.042-.055.099-.084.162-.055.063.028.125.056.168.028.042-.028.165-.125.134-.145s-.001-.084-.176-.084c-.174 0-.236.072-.277.026-.028-.03-.013-.063.045-.099z"
        />
        <use fill="#000" filter="url(#mantine-4iu06x9i9)" xlinkHref="#mantine-0hrwj2j5v" />
        <use fill="#feca00" xlinkHref="#mantine-0hrwj2j5v" />
      </g>
    </g>
  </svg>
);
