import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { media } from './Breakpoints'

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

export default () => (
    <SiteHeader>
      <Link to="/">
        <h3>Alexandra Strekalova</h3>
      </Link>
      <SiteNav>
        <ul>
          <li>
            <NavLink underline="#16a085" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink underline="#2980b9" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </SiteNav>
    </SiteHeader>)
