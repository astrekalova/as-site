import Typography from "typography"
import { white, black } from './color'

const options = {
    baseFontSize: '18px',
    baseLineHeight: 1.45,
    scaleRatio: 2.25,
    bodyColor: white,
    headerFontFamily: ['Exo', 'sans-serif'],
    bodyFontFamily: ['Yrsa', 'sans-serif'],
    overrideStyles: ({ rhythm, scale }, options) => ({
      body: {
        background: black,
        lineHeight: '1.5',
      },
      a: {
        textDecoration: 'none',
      },
      p: {
        fontSize: '24px',
      }
    }),
  };

const typography = new Typography(options)

export default typography