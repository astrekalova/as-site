import React from "react"
import styled from 'styled-components';

import Layout from '../components/PageLayout'
import ContactForm from '../components/ContactForm'
import { blue } from '../utils/color'

const EmailLink = styled.span`
  color: ${blue}
`

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <h1>Contact</h1>
        <p>Fill out the form below or <a href="mailto:strekalo@gmail.com"><EmailLink>email</EmailLink></a> me, I'd love to talk!</p>
        <ContactForm />
      </Layout>
    )
  }
}