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
  @supports(display: grid) {
    grid-column: span ${props => props.cols};
    border-radius: 4px;
  }
  height: 512px;
  @media(max-width: 900px) {
    grid-column:  span ${props => max(props.cols, 2)};
    height: calc(100vw - 20px);
    max-height: 512px;
  }
`

export const Section = styled.div`
  display: flex;
  /*height: 512px;*/
  width: 100%;
  justify-content: left;
  background-color: ${ props => props.bg || '#fff' };
  align-items: stretch;
  flex-wrap: wrap;
  @supports(display: grid) {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media(max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    // grid-template-columns: repeat(1fr, minmax(1fr, 2fr));
  }
  max-width: 1960px;
  margin: 0 auto;
`
