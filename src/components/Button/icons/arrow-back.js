import React from 'react';


export default ({color, right}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path transform={`rotate(${right ? 180 : 0}, 12, 12)`} fill={color || '#5261ff'} fill-rule="nonzero" id="a" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/>
</svg>
