import styled, { keyframes, css } from 'styled-components'

const upDown = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(50px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(130px);
  }
  to {
    transform: translateY(230px);
  }
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  position: relative;
  pin: {top:0,right:0,bottom:0,left:0}
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  position: relative;
  pin: {top:0,right:0,bottom:0,left:0}
`