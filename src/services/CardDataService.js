import http from "../http-common";

class CardDataService {
    get(id){
        return http.get(`/card/${id}`)
    }
     create(data){
         return http.post('/cards', data)
    }
}
export default new CardDataService()
