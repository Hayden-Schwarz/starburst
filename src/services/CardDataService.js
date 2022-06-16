import http from "../http-common";

class CardDataService {
    get(id){
        return http.get(`/card/${id}`)
    }
     create(data){
         return http.post('/cards', data)
    }
  getAllDeals(){
    return http.get(`/deals`)
  }
}
export default new CardDataService()
