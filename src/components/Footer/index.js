import React from "react";
import styled from "styled-components";
import {MobileShow, MobileHide} from '../MobileHide'
import Link from "gatsby-link";

const FooterBase = ({ className }) => (
    <div className={className}>
        <p>&copy; 2012 – {new Date().getFullYear()}, Anton Sokolov, Half of Eight</p>
    </div>
);

const FooterStyled = styled(FooterBase)`
    padding-top: 70px;
    padding-bottom: 70px;
    text-align: center;

    font-size: 13px;
    line-height: 1.85;
    letter-spacing: normal;
    text-align: center;
    color: #001d60;
`

export default FooterStyled;
