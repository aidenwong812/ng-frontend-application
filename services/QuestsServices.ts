import { API_ENDPOINTS } from '@/utils/api-integration'
import CoreNextAPIService from './CoreNextAPIService'

class QuestsServices {
  getQuests = async () => {
    return CoreNextAPIService.get<any>(`${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PUBLIC.GET_QUESTS}`)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new QuestsServices()
