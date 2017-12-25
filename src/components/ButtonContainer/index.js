import React from 'react';
import {Section, Col} from '../Section';
import styled from 'styled-components';


export default styled.div`
    display: grid;
    width: 100%;
    ${props => props.children.length === 3 ? `grid-template-columns: 1fr 2fr 1fr;` : ''}
    ${props => props.children.length === 2 ? `grid-template-columns: 1fr 1fr;` : ''}
    grid-column-gap: 7px;
    padding: 0 4px 0 4px;
`