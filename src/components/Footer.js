import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { media } from './Breakpoints'

library.add(fab)

const FooterLinks = [
  {
    name: 'twitter',
    link: 'https://twitter.com/astrekalova',
    },
  {
    name: 'github',
    link: 'https://github.com/astrekalova',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/alexandra-strekalova-a1a78aa6/',
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
  margin-bottom: 20px;
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
            href={link.link}
            >
            <FontAwesomeIcon icon={['fab', `${link.name}`]} size="2x" />
            </SocialLink>
        </li>
        ))}
    </SocialLinks>
</footer>)
