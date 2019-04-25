import React from 'react';
import styled from 'styled-components';
import media from './Breakpoints';

const FooterLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/astrekalova',
    color: '#00aced',
  },
  {
    name: 'Github',
    link: 'https://github.com/astrekalova',
    color: '#4183c4',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/alexandra-strekalova-a1a78aa6',
    color: '#3b5998',
  },
];

const Footer = () => (
  <footer className="footer">
    <h3>You can find me here</h3>
    <SocialLinks>
      {FooterLinks.map(link => (
        <li key={link.name}>
            <a href={`${link.link}`}>
            <i className={`fa fa-${link.name} fa-lg`}></i>
          </a>            
        </li>
      ))}
    </SocialLinks>
  </footer>
);

export default Footer;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  ${media.tablet`
    display: flex;
    justify-content: center;
    li + li {
      margin-left: 20px;
    }
  `}
`;

const SocialLink = styled.a`
  padding: 5px 8px;
  border-radius: 3px;
  transition: all 0.3s ease;
  color: #fff;
  background-color: ${props => props.color};
`;
