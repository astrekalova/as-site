import Typography from "typography"

const options = {
    baseFontSize: '18px',
    baseLineHeight: 1.45,
    scaleRatio: 2.25,
    bodyColor: '#FFF',
    headerFontFamily: ['Exo', 'sans-serif'],
    bodyFontFamily: ['Yrsa', 'sans-serif'],
    overrideStyles: ({ rhythm, scale }, options) => ({
      body: {
        background: '#1a1a1a',
        lineHeight: '1.5',
      },
      a: {
        color: '#f1c40f',
        textDecoration: 'none',
      },
      p: {
        fontSize: '24px',
      }
    }),
  };

const typography = new Typography(options)

export default typography