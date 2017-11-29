import React from "react";
import styled from "styled-components";
import {MobileShow} from '../MobileHide'
import Link from "gatsby-link";

const FooterBase = ({ className }) => (
    <div className={className}>
        <p>contact me via</p>
        <p>
            <a href="mailto:jetixc@gmail.com">jetixc@gmail.com</a>
            <br />
            <a href="https://fb.com/stayswim">fb</a>{" "}
            <a href="https://instagram.com/halfof8">instagram</a>
        </p>
    </div>
);

const FooterStyled = styled(FooterBase)`
    padding-top: 20px;
    text-align: center;
`

export default FooterStyled;