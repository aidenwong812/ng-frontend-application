export interface QuestProps {
  title: string
  cover: string
  language: {
    label: string
    id: string
  }
  difficulty: number
  rewards: {
    expPoints: number
    gold: number
  }
  type: {
    label: string
    id: string
  }
  slug: string
}
