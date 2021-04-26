import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  // NOTE this gets the active users account
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  // NOTE this gets the profile of another user
  async getProfile(id) {
    // TODO add try catch
    const res = await api.get('api/profiles/' + id)
    AppState.activeProfile = res.data
  }
}

export const accountService = new AccountService()
