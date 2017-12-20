import React from "react";
import styled from "styled-components";
import Arrow from "./arrow-back";
import Home from './home';

const IconContainer = styled.div`
    position: absolute;
    left: 20px;
    top: 50%;
    margin-top: -10px;
    height: 20px;
`;


const icons = { 
    arrow: Arrow,
    home: Home
}

export default icon => props => {
    const Icon = icons[icon];
    if(!icon) return null;
    return (
        <IconContainer>
            <Icon {...props} />
        </IconContainer>
    );
};
