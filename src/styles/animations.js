import styled, { keyframes, css } from 'styled-components'

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25%, 100% {
    transform: rotate(360deg);
  }
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

const rotateAnimation = css`
  ${rotate} 3s ease-in-out infinite;
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Rotate = styled.div`
  animation: ${rotateAnimation};
  position: absolute;
  top:77px;
  left:50px;
`