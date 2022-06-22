import http from '../http-common'

class CardDataService {
  get (id) {
    return http.get(`/card/${id}`)
  }

  create (data) {
    return http.post('/cards', data)
  }

  getAllDeals () {
    return http.get(`/deals`)
  }
  sendToken (data) {
    return http.post(`/tokens`, data)
  }
}

export default new CardDataService()
