import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { green, red, blue, yellow, black, white } from '../utils/color';
import media from './Breakpoints';
import { FaBars, FaClose } from 'react-icons/lib/fa';

export default ({ location }) => {
  return (
    <Header>
      <Link to="/">
        <Logo page={location.pathname.replace('/', '')}>AS</Logo>
        <h1 className="name">Alexandra Strekalova</h1>
      </Link>
      <ResponsiveMenu />
    </Header>
    )
}

const ResponsiveMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <LargeMenu>
        <Menu /> 
      </LargeMenu>
      <SmallMenu> 
          {!showMenu ? (
            <MenuIcon onClick={() => setShowMenu(!showMenu)} icon={<FaBars size={30} />} />
          ) : (
            <MenuIcon onClick={() => setShowMenu(!showMenu)} icon={<FaClose size={30} />} />
          )}
        {showMenu ? <Menu /> : null}
      </SmallMenu>
    </nav>
  )
}

const Menu = () => (
  <ul className="navigationList">
    <li className="navigationListItem">
      <Link className={`navigationLink aboutLink`} to="/about">
        About
      </Link>
    </li>
    <li>
      <Link className={`navigationLink contactLink`} to="/contact">
        Contact
      </Link>
    </li>
    <li>
      <Link className={`navigationLink blogLink`} to="/blog">
        Blog
      </Link>
    </li>
  </ul>
);

const MenuIcon = ({ onClick, icon }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
);

const LargeMenu = styled.div`
  display: block;
  @media (max-width: 576px) {
    display: none;
  }
`

const SmallMenu = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`

const Header = styled.header`
  background: ${black};
  display: flex;
  justify-content: space-between;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  width: 100%;

  .name {
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
  }

  .navigationList {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

  .navigationListItem {
      margin: 0;
  }

  .navigationLink {
    text-decoration: none;
    color: ${white};
    font-size: 18px;
    padding: 15px 10px 18px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 5px;
    display: block;
    transition: all 0.3s ease;
}

  .aboutLink:hover {
      border-bottom: 4px solid ${red};
  }

  .contactLink:hover {
      border-bottom: 4px solid ${blue};
  }

  .blogLink:hover {
      border-bottom: 4px solid ${green};
  }
`;

const Logo = styled.span`
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  background: ${(props) => {
    if (props.page === 'about') return `${red}`;
    if (props.page === 'contact') return `${blue}`;
    if (props.page.includes('blog')) return `${green}`;
    return `${yellow}`;
  }};
  color: ${black};
  padding: 10px;
  position: relative;
  z-index: 10;
  overflow: hidden;
  font-size: 26px;
  height: 52px;
  width: 59px;
  display: block;
`;