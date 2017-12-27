import React from 'react';

export default ({ color }) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 16">
    <g fill="none" fill-rule="evenodd">
        <path d="M-2-4h24v24H-2z"/>
        <path fill={color || "#5261FF"} fill-rule="nonzero" d="M18 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14H2V4l8 5 8-5v10zm-8-7L2 2h16l-8 5z"/>
    </g>
</svg>
