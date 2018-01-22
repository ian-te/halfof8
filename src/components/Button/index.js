import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import IconContainer from "./icons/IconContainer";

const StyledButton = styled.div`
    height: 82px;
    border: solid 0px ${props => props.color || "#dcdfff"};
    color: ${props => props.color || "#5261ff"};
    a {
        color: ${props => props.color || "#5261ff"};
    }
    text-align: center;
    display: flex;
    font-size: 12px;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    padding: 5px 10px;
    cursor: pointer;
`;

export default props => {
    const { icon, href, to, onClick, children, color, width = "25%" } = props;
    const Icon = IconContainer(icon);
    switch (true) {
        case typeof onClick !== "undefined":
            return (
                <StyledButton onClick={onClick} color={color}>
                    <Icon color={color} />
                    {children}
                </StyledButton>
            );
        case typeof href !== "undefined":
            return (
                <a href={href}>
                    <StyledButton color={color}>
                        <Icon color={color} />
                        {children}
                    </StyledButton>
                </a>
            );
        case typeof to !== "undefined":
            return (
                <Link to={to}>
                    <StyledButton color={color}>
                        <Icon color={color} />
                        {children}
                    </StyledButton>
                </Link>
            );
        default:
            return (
                <StyledButton color={color}>
                    <Icon color={color} />
                    {children}
                </StyledButton>
            );
    }
    return <Link style={{ display: "block" }} to={to} />;
};
