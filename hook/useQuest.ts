import { useQuery } from '@tanstack/react-query'

import QuestsServices from '@/services/QuestsServices'

export const useQuest = (questSlug: string) => {
  const { isLoading: isLoadingQuest, data: Quest } = useQuery({
    queryKey: ['quest'],
    queryFn: () => QuestsServices.getQuest(questSlug!),
  })
  return {
    isLoadingQuest,
    Quest,
  }
}
