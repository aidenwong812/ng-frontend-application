"use client"

import Image from 'next/image'
import styled from 'styled-components'
import { ShapedButtonProps } from './interface'

const Wrapped = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  clip-path: polygon(
    5px 0,
    calc(100% - 5px) 0,
    100% 5px,
    100% calc(100% - 5px),
    calc(100% - 5px) 100%,
    5px 100%,
    0 calc(100% - 5px),
    0 5px
  );
  background-color: #212121;
`

const PrimaryWrapped = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  clip-path: polygon(
    5px 0,
    calc(100% - 5px) 0,
    100% 5px,
    100% calc(100% - 5px),
    calc(100% - 5px) 100%,
    5px 100%,
    0 calc(100% - 5px),
    0 5px
  );
  background-color: #F6CF8F;
`

const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 2px;
  top: 1px;
  left: 1px;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  clip-path: polygon(
    5px 0,
    calc(100% - 5px) 0,
    100% 5px,
    100% calc(100% - 5px),
    calc(100% - 5px) 100%,
    5px 100%,
    0 calc(100% - 5px),
    0 5px
  );
  background-color: black;
  color: #CCCCCC;
  font-size: 12px;
`

const PrimaryContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 2px;
  top: 1px;
  left: 1px;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  clip-path: polygon(
    5px 0,
    calc(100% - 5px) 0,
    100% 5px,
    100% calc(100% - 5px),
    calc(100% - 5px) 100%,
    5px 100%,
    0 calc(100% - 5px),
    0 5px
  );
  background-color: #B69E72;
  color: #CCCCCC;
  font-size: 12px;
`

const ShapedButton: React.FC<ShapedButtonProps> = ({ children, primary = false }) => {
  return (
    <>
      {
        primary ? (
          <PrimaryWrapped>
            <PrimaryContainer>{children}</PrimaryContainer>
          </PrimaryWrapped >
        ) : (
          <Wrapped>
            <Container>{children}</Container>
          </Wrapped >
        )
      }
    </>
  )
}

export default ShapedButton
