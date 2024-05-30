"use client"

import styled from 'styled-components'

const Container = styled.div`
  z-index: 40;
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`

const SpinnerOuterContainer = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  background-color: #C517D1;
`

const SpinnerOuterAnimated = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  background-color: #2592D9;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`

const SpinnerInnerContainer = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  background-color: #C517D1;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`

const SpinnerInnerAnimated = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  background-color: #2592D9;
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`

const Spinner: React.FC = () => {
  return (
    <Container>
      <SpinnerOuterContainer>
        <SpinnerOuterAnimated>
          <SpinnerInnerContainer>
            <SpinnerInnerAnimated />
          </SpinnerInnerContainer>
        </SpinnerOuterAnimated>
      </SpinnerOuterContainer>
    </Container>
  )
}

export default Spinner
