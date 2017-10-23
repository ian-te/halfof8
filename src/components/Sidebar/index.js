import React from 'react';
import Logo from './logo';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Sidebar = ({ className }) => (
    <div className={className}>
        
        <Link to="/">
            <Logo fill="#000" hoverfill="#0000FF" />
        </Link>

        <p>contact me via</p>
        <p>
            <a href="mailto:jetixc@gmail.com">jetixc@gmail.com</a>
            <br />
            <a href="https://fb.com/stayswim">fb</a> <a href="https://instagram.com/halfof8">instagam</a>
        </p>
    </div>
);

const SidebarStyled = styled(Sidebar)`
    width: 245px;
    flex-shrink: 0;
    flex-grow: 0;
    text-align: center;
    font-size: 13px;
    background-color: #FFF;
    line-height: 1.7;
    p {
        color: #001d60;
    }
`;

export default SidebarStyled;
