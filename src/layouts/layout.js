import React from 'react'
import styled from 'styled-components'

const Layout = ({ className, children }) => (
  <div className={className}>{children}</div>
)

const LayoutStyled = styled(Layout)`
  display: flex;
  max-width: 1960px;
  margin: 0 auto;
  & > div:first-child {
    width: 20%;
    min-width: 250px;
    margin-right: 20px;
  }
  @media (max-width: 580px) {
    display: block;
    & > div:first-child {
      width: 100%;
      min-width: 250px;
    }
  }
`

export default LayoutStyled
