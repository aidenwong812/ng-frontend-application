import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'components/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'Quests',
  description: 'Quests',
}

export interface QuestsProps {
  children: React.ReactNode
}

const HoldingLayout: React.FC<QuestsProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default HoldingLayout
