import React from 'react';
import styled from 'styled-components';
import media from './Breakpoints';
import { SocialIcon } from 'react-social-icons';

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
    <Subheader>You can find me here</Subheader>
    <SocialLinks>
      {FooterLinks.map(link => (
        <SocialLink key={link.name}>
          <SocialIcon url={link.link} bgColor={link.color}/>         
        </SocialLink>
      ))}
    </SocialLinks>
  </footer>
);

export default Footer;

const Subheader = styled.h3`
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 18px;
  letter-spacing: 5px;
  text-align: center;
  font-size: 1.17em;
`;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 1em;
`;

const SocialLink = styled.li`
  display: inline;
  margin-right: 1em;
`;