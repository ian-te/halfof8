import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import IconContainer from './icons/IconContainer';

const StyledButton = styled.div`
    height: 82px;
    border: solid 1px ${props => props.color || "#dcdfff"};
    color: ${props => props.color || "#5261ff"};
    a {
        color: ${props => props.color || "#5261ff"};
    }
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    position: relative;
`;

const StyledIcon = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
`

export default ({ icon, to, onClick, children, color, width='25%' }) => { 
    const Icon = IconContainer(icon);
    return <Link style={{display: 'block' }} to={to}>
        <StyledButton color={color}>
            <Icon color={color} />
            {children}
        </StyledButton>
    </Link>
 };
