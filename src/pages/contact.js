import React from "react"
import styled from 'styled-components';

import Layout from '../components/PageLayout'
import ContactForm from '../components/ContactForm'
import { contactColor } from '../utils/color'

const EmailLink = styled.span`
  color: ${contactColor}
`

export default () => (
  <Layout>
      <h1>Contact</h1>
      <p>Fill out the form below or <a href="mailto:strekalo@gmail.com"><EmailLink>email</EmailLink></a> me, I'd love to talk!</p>
      <ContactForm />
  </Layout>
)