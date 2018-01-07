import React from "react";
import styled from "styled-components";
import {MobileShow, MobileHide} from '../MobileHide'
import Link from "gatsby-link";

const FooterBase = ({ className }) => (
    <div className={className}>
        <p>&copy; 2012 – {new Date().getFullYear()}, 👋 Car does not move till we are all buckled up</p>
    </div>
);

const FooterStyled = styled(FooterBase)`
    padding-top: 20px;
    padding-bottom: 0px;
    text-align: left;

    font-size: 13px;
    line-height: 1.85;
    letter-spacing: normal;
    text-align: left;
    color: #001d60;
`

export default FooterStyled;
