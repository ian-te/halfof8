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
    box-sizing: border-box;
    position: relative;
    padding: 5px 10px;
`;


const ButtonWrapperHOC = (Button, {to, onClick, href}) => {
    switch(true) {
        case onClick:
            console.log('onclick')
            return props => <Button {...props} onClick={onClick} />
        case href:
            console.log('href')
            return props => <a href={href}><Button {...props} /></a>
        case to: 
            console.log('to')
            return props => <Link to={to}><Button {...props} /></Link>
        default: 
            console.log('null')
            return props => <Button {...props} />
    }
}

export default ({ icon, to, href, onClick, children, color, width='25%' }) => { 
    const Icon = IconContainer(icon);
    const Button = <StyledButton color={color}>
            <Icon color={color} />
            {children}
        </StyledButton>
    const Wrapper = ButtonWrapperHOC(Button, {onClick, href, to});
    return Wrapper;
 };
