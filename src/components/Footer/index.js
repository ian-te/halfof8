import React from "react";
import styled from "styled-components";
import {MobileShow, MobileHide} from '../MobileHide'
import Link from "gatsby-link";

const FooterBase = ({ className, children }) => (
    <div className={className}>
        {children}
    </div>
);

const FooterStyled = styled(FooterBase)`
    padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 5px;
    padding-left: 5px;
    text-align: left;

    font-size: 8px;
    line-height: 1.95;
    letter-spacing: left;
    text-align: left;
    color: ${props => props.color || '#000000'};
`

export default FooterStyled;
