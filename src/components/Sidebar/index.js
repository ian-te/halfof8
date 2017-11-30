import React from 'react'
import Logo from './logo'
import styled from 'styled-components'
import Link from 'gatsby-link'
import {MobileHide} from '../MobileHide'

const Sidebar = ({ className, color, bgColor }) => (
  <div className={className}>
    <Link to="/">
      <Logo fill={color || "#000"} hoverfill={color ? '#CCC' : "#0000FF"} />
    </Link>
    <MobileHide>
      <p>contact me via</p>
      <p>
        <a href="mailto:jetixc@gmail.com">jetixc@gmail.com</a>
        <br />
        <a href="https://fb.com/stayswim">fb</a>{' '}
        <a href="https://instagram.com/halfof8">instagram</a>
      </p>
    </MobileHide>
  </div>
)

const SidebarStyled = styled(Sidebar)`
  min-width: 250px;
  height: 100%;
  position: fixed;
  padding-top: 26px;
  flex-shrink: 0;
  flex-grow: 0;
  text-align: center;
  font-size: 13px;
  background-color: ${props => props.bgColor ? props.bgColor : '#fff'};
  line-height: 1.7;
  p {
    color: ${props => props.color ? props.color : '#001d60'};
  }
  ${props => props.color ?
  `a{
    color ${props.color}
  }`
  : ''}
  @media(max-width: 560px){
    position: relative;
  }
`

export default SidebarStyled
