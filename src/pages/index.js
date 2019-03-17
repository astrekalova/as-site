import React from 'react'

import Layout from '../components/PageLayout'
import SVG from '../components/SVG'
import { UpDown, UpDownWide, Rotate } from '../styles/animations'
import { greyDarker, greyDarkest, green, red, blue, white } from '../utils/color'

const IndexPage = () => (
  <>
    <UpDown from="0" to="30px">
      <SVG icon="triangle" width="10rem" stroke={blue} left="15%" top="50%" />
      <SVG icon="hexa" hiddenMobile width="12rem" stroke={green} left="60%" top="25%" />
      <SVG icon="box" width="1.5rem" stroke={greyDarker} left="60%" top="15%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="arrowUp" hiddenMobile width="3rem" fill={red} left="80%" top="20%" />
      <SVG icon="triangle" width="3rem" stroke={white} left="90%" top="50%" />
      <SVG icon="triangle" width="2rem" stroke={greyDarkest} left="35%" top="50%" />
      <SVG icon="upDown" hiddenMobile width="2rem" fill={greyDarkest} left="90%" top="10%" />
    </UpDownWide>
    <SVG icon="circle" hiddenMobile width="6rem" fill={greyDarker} left="2%" top="70%" />
    <SVG icon="circle" width="1.5rem" fill={greyDarkest} left="2%" top="20%" />
    <SVG icon="circle" width="3rem" fill={greyDarker} left="50%" top="60%" />
    <SVG icon="upDown" width="2rem" fill={greyDarkest} left="95%" top="90%" />
    <SVG icon="upDown" hiddenMobile width="3rem" fill={greyDarker} left="40%" top="75%" />
    <Rotate>
      <SVG icon="triangle" width="2rem" stroke={white} />
    </Rotate>
    <SVG icon="box" width="1.5rem" fill={greyDarkest} />
    <SVG icon="hexa" width="4rem" stroke={greyDarker} left="10%" top="50%" />
    <SVG icon="hexa" width="2rem" stroke={greyDarker} left="80%" top="70%" />
    <Layout>
      <h1>Hello, I am Alexandra.</h1>
      <p>I am a senior software developer.</p>
    </Layout>
  </>
)

export default IndexPage
