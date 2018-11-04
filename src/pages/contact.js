import React from "react"
import styled from 'styled-components';

import Layout from '../components/PageLayout'
import { contactColor } from '../utils/color'

const EmailLink = styled.span`
  color: ${contactColor}
`

export default () => (
  <Layout>
      <h1>Contact</h1>
      <p><a href="mailto:strekalo@gmail.com"><EmailLink>Email</EmailLink></a> me, I'd love to talk!</p>
  </Layout>
)