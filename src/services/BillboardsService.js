import { AppState } from '../AppState'
import { api } from './AxiosService'

class BillboardsService {
  async getBillboards() {
    const res = await api.get('api/ads')
    AppState.billboards = res.data
  }
}

export const billboardsService = new BillboardsService()
