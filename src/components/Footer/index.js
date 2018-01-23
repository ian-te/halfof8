import React from "react";
import styled from "styled-components";
import {MobileShow, MobileHide} from '../MobileHide'
import Link from "gatsby-link";

const FooterBase = ({ className }) => (
    <div className={className}>
      <p>
      &copy; 2012 – {new Date().getFullYear()}, 
      👋 Car does not move till we are all buckled up, so keep in touch via {' '}<a href="mailto:info@halfof8.com">info@halfof8.com</a>, 
      {' '}<a href="https://fb.com/stayswim">fb</a>, {' '}<a href="https://instagram.com/halfof8">insta</a><br/>
      Developed by <a href="https://github.com/yante" target="_blank" >Yan Te</a>. 
      Typefaces used: Space Mono by <a href="http://www.colophon-foundry.org/" target="_blank" >Colophon</a>, 
      Work Sans by <a href="https://github.com/weiweihuanghuang/Work-Sans" target="_blank" >Wei Huang</a>
     </p>
    </div>
);

const FooterStyled = styled(FooterBase)`
    padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 5px;
    padding-left: 5px;
    text-align: left;

    font-size: 13px;
    line-height: 1.85;
    letter-spacing: left;
    text-align: center;
    color: ${props => props.color || '#001d60'};
`

export default FooterStyled;
