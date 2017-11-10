import React from 'react'
import styled, { css } from 'styled-components'

export const Col = styled.div`
  display: block;
  height: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  background-image: url(${props => props.background});
  ${props =>
    props.cols == 1 &&
    css`
      width: 25%;
      @media (min-width: 900px) and (max-width: 1200px) {
        min-width: 50%;
      }
    `} ${props =>
      props.cols == 2 &&
      css`
        width: 50%;
      `} ${props =>
      props.cols == 3 &&
      css`
        width: 75%;
      `} ${props =>
      props.cols == 4 &&
      css`
        width: 100%;
      `} ${props =>
      (props.cols == 1 || props.cols == 2) &&
      css`
        @media (max-width: 900px) {
          width: 100%;
        }
      `};
`

export const Section = styled.div`
  display: flex;
  /*height: 512px;*/
  width: 100%;
  justify-content: left;
  background-color: #fff;
  align-items: stretch;
  flex-wrap: wrap;
  maxwidth: 1960px;
  margin: 0 auto;
`
