import React from 'react'
import styled from 'styled-components'
import { media } from './Breakpoints'

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
]

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
    `};
`

const SocialLink = styled.a`
  padding: 5px 8px;
  border-radius: 3px;
  transition: all 0.3s ease;
  color: #fff;
  background-color: ${props => props.color};
`
const SubHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 40px;
  letter-spacing: 5px;
  text-align: center;
  font-size: 1.17em;
`;

export default () => (
<footer>
    <SubHeader>You can find me here</SubHeader>
    <SocialLinks>
        {FooterLinks.map(link => (
        <li key={link.name}>
            <SocialLink
            target="_blank"
            rel="nofollow"
            color={link.color}
            href={link.link}
            >
            {link.name}
            </SocialLink>
        </li>
        ))}
    </SocialLinks>
</footer>)
