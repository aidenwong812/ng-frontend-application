"use client"

import QuestOne from '@/components/Organisms/QuestOne'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 710px;
  height: 460px;
  margin: 150px auto;
`

const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`

const Quest: React.FC = () => {
  return (
    <Container>
      <Background src="/assets/desktop.png" />
      <QuestOne />
    </Container>
  )
}

export default Quest