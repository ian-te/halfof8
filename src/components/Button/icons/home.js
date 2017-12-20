import React from "react";

export default ({color}) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
    <g fill="none" fill-rule="evenodd">
        <path fill={color || '#5261ff'} fill-rule="nonzero" d="M8 17v-6h4v6h5V9h3L10 0 0 9h3v8z"/>
        <path d="M-2-3h24v24H-2z"/>
    </g>
</svg>
