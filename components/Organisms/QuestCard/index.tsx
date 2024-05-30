"use client"

import GoldDisplay from '@/components/Atoms/GoldDisplay'
import ShapedButton from '@/components/Atoms/ShapedButton'
import XpDisplay from '@/components/Atoms/XpDisplay'
import Image from 'next/image'
import styled from 'styled-components'
import { QuestProps } from './interface'
import { useRouter } from 'next/navigation'

const Wrapped = styled.div`
  display: inline-block;
  position: relative;
  min-width: 400px;
  min-height: 240px;
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
  cursor: pointer;
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
  aspect-ratio: 476/86;
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

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
`

const LeftContainer = styled.div`
  grid-column: span 4 / span 4;
`

const QuestName = styled.h3`
  color: #CCCCCC;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`

const SolidityButton = styled.div`
  width: 80px;
  height: 30px;
`

const SwordButton = styled.div`
  width: 90px;
`

const BuildButton = styled.div`
  width: 50px;
`

const CTFButton = styled.div`
  width: 40px;
`

const QuestCard: React.FC<QuestProps> = ({ title, cover, language, difficulty, rewards, type, slug }) => {
  const router = useRouter()
  return (
    <Wrapped onClick={() => router.push(`/quests/${slug}`)}>
      <Container>
        <Heading src={cover} />
        <GridDiv>
          <LeftContainer>
            <QuestName>{title}</QuestName>
          </LeftContainer>
          <XpDisplay value={rewards.expPoints.toString()} />
          <LeftContainer>
            <ButtonGroup>
              <SolidityButton>
                <ShapedButton>
                  <Image src="/assets/solidity.svg" alt="Solidity" width={16} height={16} />
                  <p>{language.label}</p>
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
              <BuildButton>
                <ShapedButton>
                  <p>Build</p>
                </ShapedButton>
              </BuildButton>
              <CTFButton>
                <ShapedButton>
                  <p>CTF</p>
                </ShapedButton>
              </CTFButton>
            </ButtonGroup>
          </LeftContainer>
          <GoldDisplay value={rewards.gold.toString()} />
        </GridDiv>
      </Container>
    </Wrapped>
  )
}

export default QuestCard