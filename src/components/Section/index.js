import React from 'react'
import styled, { css } from 'styled-components'

const max = (n, max) => n > max ? max : n;

export const Col = styled.div`
  display: block;
  height: 100%;
  box-sizing: border-box;
  background-color: transparent;
  overflow: hidden;
  background-image: url(${props => props.background});
  height: 512px;
  flex-grow: 1;
  margin: 5px;
  overflow: hidden;
  border-radius: 4px;
  width: calc(${props => props.cols * 25}% - 10px); 
  @media(max-width: 900px) {
    width: calc(${props => props.cols >= 2 ? 100 : 50}% - 10px); 
    max-height: 512px;
    height: calc(100vw - 20px);
  }
  
`

export const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: stretch;
  background-color: ${ props => props.bg || '#fff' };
  align-items: stretch;
  flex-wrap: wrap;
  max-width: 1960px;
  margin: 0 auto;
`
