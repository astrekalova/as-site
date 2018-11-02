import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { media } from './Breakpoints'
import { logoColor, aboutColor, contactColor } from '../utils/color'

const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  &:hover {
    h1 {
      transform: translate3d(80px, 0, 0);
      transition: 0.3s all cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
`

const SiteNav = styled.nav`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    > li {
      margin: 0;
    }
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  padding: 15px 10px 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  display: block;
  transition: all 0.3s ease;
  ${media.tablet`
    font-size: 16px;
    padding: 15px 20px 18px;
  `} &:hover {
    border-bottom: 4px solid ${props => props.underline};
  }
`

const Logo = styled.span`
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  background: ${logoColor};
  color: #111;
  padding: 10px;
  position: relative;
  z-index: 10;
  overflow: hidden;
  font-size: 26px;
  height: 52px;
  width: 60px;
  display: block;
`;

const Name = styled.h1`
  margin: 0;
  top: 0;
  position: absolute;
  display:none;
  z-index: 5;
  transform: translate3d(-100%, 0, 0);
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  font-size: 24px;
  text-decoration: none;
  font-weight: 900;
  line-height: 52px;
  color:#FFF;
  transition: 0.3s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
  ${media.tablet`display: block;`}
`;

export default () => (
    <SiteHeader>
      <Link to="/">
        <Logo>AS</Logo>
        <Name>Alexandra Strekalova</Name>
      </Link>
      <SiteNav>
        <ul>
          <li>
            <NavLink underline={aboutColor} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink underline={contactColor} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </SiteNav>
    </SiteHeader>)
