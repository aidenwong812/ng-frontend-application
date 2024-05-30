"use client"

import QuestCard from '@/components/Organisms/QuestCard'
import { useQuests } from '@/hook/useQuests'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 750px;
  margin: 70px 120px;
`

const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`

const QuestContainer = styled.div`
  display: grid;
  height: 690px;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 30px;
  overflow: auto
`

const Quests: React.FC = () => {
  const { Quests } = useQuests()
  return (
    <Container>
      <Background src="/assets/desktop.png" />
      <QuestContainer>
        {
          Quests && Quests.length > 0 && Quests.map((quest: any) => {
            return (
              <QuestCard
                key={quest.slug}
                title={quest.title}
                cover={quest.cover}
                language={quest.language}
                difficulty={quest.difficulty}
                rewards={quest.rewards}
                type={quest.type}
                slug={quest.slug}
              />
            )
          })
        }
      </QuestContainer>
    </Container>
  )
}

export default Quests