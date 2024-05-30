"use client"

import GoldDisplay from '@/components/Atoms/GoldDisplay'
import ShapedButton from '@/components/Atoms/ShapedButton'
import XpDisplay from '@/components/Atoms/XpDisplay'
import Image from 'next/image'
import styled from 'styled-components'
import { QuestProps } from '../QuestCard/interface'
import { airdropAtoms } from '@/components/jotai/atom'
import { useAtom } from 'jotai'

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
  aspect-ratio: 16/9;
  width: 100%;
  overflow: hidden;
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
  cursor: pointer;
`

const AirdropButton = styled.div`
  width: 350px;
  cursor: pointer;
`

const QuestOne: React.FC<QuestProps> = ({ title, cover, language, difficulty, rewards, type, slug }) => {
  const [airdrop, setAirdrop] = useAtom(airdropAtoms)

  return (
    <Wrapped>
      <Container>
        <Heading src={cover} />
        <InnerContainer>
          <FlexColumnDiv>
            <QuestName>{title}</QuestName>
            <FlexDiv>
              <ButtonGroup>
                <SolidityButton>
                  <ShapedButton>
                    <Image src="/assets/solidity.svg" alt="Solidity" width={16} height={16} />
                    <p>{language?.label}</p>
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
                <GoldDisplay value={rewards?.gold.toString()} />
                <XpDisplay value={rewards?.expPoints.toString()} />
              </FlexDiv>
            </FlexDiv>
            <QuestDescription>Trading of cryptoassets in DeFi relies on new and unique matching mechanisms. One widely used mechanism in traditional finance is the centralised limit order book, which entails keeping electronic records of all outstanding orders. Likewise, Trading of cryptoassets in DeFi relies on new and unique matching mechanisms.</QuestDescription>
          </FlexColumnDiv>
          <ButtonGroup1>
            <BackButton onClick={() => window.history.back()}>
              <ShapedButton>
                <p style={{ color: '#B69E72', fontSize: 16 + 'px' }}>Go Back</p>
              </ShapedButton>
            </BackButton>
            <AirdropButton onClick={() => setAirdrop(rewards)}>
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