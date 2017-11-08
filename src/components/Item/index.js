import React from "react";
import styled from "styled-components";
import { Col } from "../Section";
import Link from 'gatsby-link';

const Description = styled.div`
    max-width: 250px;
    margin-top: 56px;
    h2 {
        font-weight: 500;
    }
`;
const Tag = styled.div`
    padding: 3px 9px;
    line-height: 1.3em;
    border-radius: 4px;
    height: 28px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    background-color: ${props =>
        props.theme == "dark"
            ? `rgba(255, 255, 255, 0.2)`
            : `rgba(0, 29, 96, 0.1)`};
`;

const InnerItem = styled.div`
    padding: 26px;
`;

const ItemBase = ({ cols, children, tag, secondary, className, theme }) => (
    <Col cols={cols} style={{ padding: "4px" }}>
        <Link to="/project/dark-tower" style={{textDecoration: 'none'}}>
            <div className={className} style={{}}>
                <InnerItem>
                    {tag ? <Tag theme={theme}>{tag}</Tag> : null}
                    <Description>{children}</Description>
                </InnerItem>
            </div>
        </Link>
    </Col>
);

const lightGradient = `linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3) 140px,
    rgba(255, 255, 255, 0) 290px
)`;

const darkGradient = `linear-gradient(
    to right,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3) 140px,
    rgba(0, 0, 0, 0) 290px
)`;

export const Item = styled(ItemBase)`
    background-position: center center;
    height: 100%;
    min-height: 512px;
    text-decoration: none;
    color: ${props => (props.theme == "dark" ? "#FFF" : "#001d60")};
    background-image: ${props =>
            props.theme == "dark" ? darkGradient : lightGradient}
        ${props => (props.background ? `, url("${props.background}")` : ``)};
    box-sizing: content-box;
    position: relative;
    transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        box-shadow: 0 37.125px 70px -12.125px rgba(0, 0, 0, 0.3);
        z-index: 1;
        /*padding: 8px;
        margin: -8px -8px;*/
    }
    @media (max-width: 580px) {
        min-height: 0;
    }
`;
