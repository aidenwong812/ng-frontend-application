"use client"

import Image from 'next/image'
import styled from 'styled-components'
import { GoldDisplayProps } from './interface'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const DisplayNumberPrimary = styled.h6`
  font-size: 14px;
  color: #B69E72;
  margin: 0px;
`

const DisplayNumberSecondary = styled.h6`
  font-size: 12px;
  color: #CCCCCC;
  margin: 0px;
`

const GoldDisplay: React.FC<GoldDisplayProps> = ({ value, primary = false }) => {
  return (
    <Container>
      <Image src='/assets/gold.png' alt='Gold' width={24} height={24} />
      {
        primary ? (
          <DisplayNumberPrimary>{value}</DisplayNumberPrimary>
        ) : (
          <DisplayNumberSecondary>{value}</DisplayNumberSecondary>
        )
      }
    </Container>
  )
}

export default GoldDisplay
