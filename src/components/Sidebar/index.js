import React from 'react'
import Logo from './logo'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { TypingText } from '../Intro'
import {MobileHide} from '../MobileHide'

const Sidebar = ({ className, color, bgColor }) => (
  <div className={className}>
    <Link to="/">
      <Logo fill={color || "#000"} hoverfill={color ? '#CCC' : "#0000FF"} />
    </Link>
    <MobileHide>
     <p>Half of Eight</p> 
     <p><TypingText /></p>
    </MobileHide>
  </div>
)

const SidebarStyled = styled(Sidebar)`
  min-width: 250px;
  width: 15.5%;
  height: 100%;
  position: fixed;
  padding-top: 26px;
  flex-shrink: 0;
  flex-grow: 0;
  text-align: center;
  font-size: 13px;
  background-color: ${props => props.bgColor ? props.bgColor : '#fff'};
  line-height: 1.7;
  max-width: 320px;
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
    width: 100%;
    margin: 0 auto;
  }
`

export default SidebarStyled
