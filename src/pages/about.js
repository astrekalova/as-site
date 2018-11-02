import React from 'react'

import Layout, { Heading } from '../components/PageLayout'
import { aboutColor } from '../utils/color'

const SecondPage = () => (
  <Layout>
    <Heading color={aboutColor}>About</Heading>
    <p>I am a full-stack developer living in Berlin. I have experience in retail and online-advertising industries.</p>
  </Layout>
)

export default SecondPage
