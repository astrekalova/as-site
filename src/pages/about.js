import React from 'react'
import styled from 'styled-components';

import Layout from '../components/PageLayout'
import { red } from '../utils/color'

const Link = styled.span`
  color: ${red}
`

export default class AboutPage extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <h1>About</h1>
        <p>I am a full-stack developer living in Berlin.</p>
        <p>I have experience with a full range of technologies - from Java and Spring on the backend to JavaScript and React.js on the frontend side
      and GoCD, Docker and Kubernetes in the infrastructure area.</p>
        <p>In the past years I have been working in retail, automotive and online-advertising industries.</p>
        <p>I strongly believe that the IT industry should be a diverse and fair place, so
          I have been involved in organising a community for women in IT
      <a href="https://www.meetup.com/de-DE/Geek-Girls-Carrots-Germany/"><Link> Geek Girls Carrots </Link></a> and
      <a href="http://www.hacklikeagirl.co/"><Link> Hack like a girl! </Link></a> hackathons.
    </p>
      </Layout>
    )
  }
}
