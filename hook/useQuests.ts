import { useQuery } from '@tanstack/react-query'

import QuestsServices from '@/services/QuestsServices'

export const useQuests = () => {
  const { isLoading: isLoadingQuests, data: Quests } = useQuery({
    queryKey: ['quests'],
    queryFn: QuestsServices.getQuests,
  })
  return {
    isLoadingQuests,
    Quests,
  }
}
