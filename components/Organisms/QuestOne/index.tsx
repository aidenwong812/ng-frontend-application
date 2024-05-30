"use client"

import GoldDisplay from '@/components/Atoms/GoldDisplay'
import ShapedButton from '@/components/Atoms/ShapedButton'
import XpDisplay from '@/components/Atoms/XpDisplay'
import Image from 'next/image'
import styled from 'styled-components'

const Wrapped = styled.div`
  display: inline-block;
  position: relative;
  min-width: 700px;
  min-height: 450px;
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

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  padding: 16px;
  gap: 10px;
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
`

const Heading = styled.img`
  width: 100%;
`

const FlexDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`

const FlexColumnDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`

const InnerContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  height: 100%
`

const QuestName = styled.h3`
  color: #CCCCCC;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;
`

const QuestDescription = styled.p`
  color: #7C7C7C;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`

const ButtonGroup1 = styled.div`
  display: flex;
  justify-content: space-between
`

const SolidityButton = styled.div`
  width: 80px;
  height: 30px;
`

const SwordButton = styled.div`
  width: 90px;
`

const BackButton = styled.div`
  width: 120px;
  height: 40px;
`

const AirdropButton = styled.div`
  width: 350px;
`

const QuestOne: React.FC = () => {
  return (
    <Wrapped>
      <Container>
        <Heading src="/assets/quest.png" />
        <InnerContainer>
          <FlexColumnDiv>
            <QuestName>Quest name</QuestName>
            <FlexDiv>
              <ButtonGroup>
                <SolidityButton>
                  <ShapedButton>
                    <Image src="/assets/solidity.svg" alt="Solidity" width={16} height={16} />
                    <p>Solidity</p>
                  </ShapedButton>
                </SolidityButton>
                <SwordButton>
                  <ShapedButton>
                    <Image src="/assets/sword.svg" alt="Sword" width={14} height={14} />
                    <Image src="/assets/sword.svg" alt="Sword" width={14} height={14} />
                    <Image src="/assets/sword.svg" alt="Sword" width={14} height={14} />
                    <Image src="/assets/sword.svg" alt="Sword" width={14} height={14} />
                    <Image src="/assets/sword.svg" alt="Sword" width={14} height={14} />
                  </ShapedButton>
                </SwordButton>
              </ButtonGroup>
              <FlexDiv>
                <GoldDisplay value='180' />
                <XpDisplay value='14000' />
              </FlexDiv>
            </FlexDiv>
            <QuestDescription>Trading of cryptoassets in DeFi relies on new and unique matching mechanisms. One widely used mechanism in traditional finance is the centralised limit order book, which entails keeping electronic records of all outstanding orders. Likewise, Trading of cryptoassets in DeFi relies on new and unique matching mechanisms.</QuestDescription>
          </FlexColumnDiv>
          <ButtonGroup1>
            <BackButton>
              <ShapedButton>
                <p style={{ color: '#B69E72', fontSize: 16 + 'px' }}>Go Back</p>
              </ShapedButton>
            </BackButton>
            <AirdropButton>
              <ShapedButton primary>
                <p style={{ color: '#080808', fontSize: 16 + 'px' }}>Airdrop Reward To The Guardians</p>
              </ShapedButton>
            </AirdropButton>
          </ButtonGroup1>
        </InnerContainer>
      </Container>
    </Wrapped>
  )
}

export default QuestOne