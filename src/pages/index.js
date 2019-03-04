import React from 'react'

import Layout from '../components/PageLayout'
import SVG from '../components/SVG'
import { UpDown } from '../styles/animations'
import { UpDownWide } from '../styles/animations'
import { greyDarker, greyDarkest, logoColor, aboutColor, contactColor } from '../utils/color'

const IndexPage = () => (
  <>
    <UpDown from="0" to="30px">
      <SVG icon="hexa" width="12rem" stroke={logoColor} left="60%" top="70%" />
      <SVG icon="box" width="1.5rem" stroke={greyDarker} left="60%" top="15%" />
    </UpDown>
    <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width="5rem" fill={aboutColor} left="80%" top="10%" />
    </UpDownWide>
    <SVG icon="circle" hiddenMobile width="6rem" fill={greyDarker} left="5%" top="70%" />
    <SVG icon="circle" width="1.5rem" fill={greyDarkest} left="4%" top="20%" />
    <SVG icon="circle" width="3rem" fill={contactColor} left="50%" top="60%" />
    <SVG icon="upDown" width="2rem" fill={greyDarkest} left="95%" top="90%" />
    <SVG icon="upDown" hiddenMobile width="3rem" fill={greyDarker} left="40%" top="75%" />
    <SVG icon="triangle" width="2rem" stroke={greyDarker} left="25%" top="5%" />
    <SVG icon="circle" width="16rem" fill={greyDarkest} left="95%" top="5%" />
    <SVG icon="box" width="1.5rem" fill={greyDarkest} left="10%" top="10%" />
    <SVG icon="hexa" width="4rem" stroke={contactColor} left="10%" top="50%" />
    <SVG icon="hexa" width="2rem" stroke={greyDarker} left="80%" top="70%" />
    <Layout>
      <h1>Hello, I am Alexandra.</h1>
      <p>I am a senior software developer.</p>
    </Layout>
  </>
)

export default IndexPage
