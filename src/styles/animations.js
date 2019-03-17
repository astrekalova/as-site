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

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

const rotateAnimation = css`
  ${rotate} 4s linear infinite;
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
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50px;
  top: 100px;
`