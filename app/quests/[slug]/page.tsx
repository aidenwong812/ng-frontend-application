"use client"

import QuestOne from '@/components/Organisms/QuestOne'
import { useQuest } from '@/hook/useQuest'
import { usePathname } from 'next/navigation'
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
  const router = usePathname()
  const slug = router.split('/').slice(-1)[0]
  const { Quest } = useQuest(slug)
  return (
    <Container>
      <Background src="/assets/desktop.png" />
      <QuestOne
        key={Quest?.slug}
        title={Quest?.title}
        cover={Quest?.cover}
        language={Quest?.language}
        difficulty={Quest?.difficulty}
        rewards={Quest?.rewards}
        type={Quest?.type}
        slug={Quest?.slug}
      />
    </Container>
  )
}

export default Quest