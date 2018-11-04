import React from 'react'
import styled from 'styled-components';

import Layout from '../components/PageLayout'
import { aboutColor } from '../utils/color'

const Link = styled.span`
  color: ${aboutColor}
`

const SecondPage = () => (
  <Layout>
    <h1>About</h1>
    <p>I am a full-stack developer living in Berlin. I have experience in retail and online-advertising industries.</p>
    <p>I strongly believe that the IT industry should be a diverse and fair place, so
      I have been involved in organising a community for women in IT 
      <a href="https://www.meetup.com/de-DE/Geek-Girls-Carrots-Germany/"><Link> Geek Girls Carrots </Link></a> and 
      <a href="http://www.hacklikeagirl.co/"><Link> Hack like a girl! </Link></a> hackathons. 
    </p>
  </Layout>
)

export default SecondPage
