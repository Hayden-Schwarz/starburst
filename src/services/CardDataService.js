import http from "../http-common";

class CardDataService {
    get(id){
        return http.get(`/card/${id}`);
    }
     create(data){
         require('axios-debug-log/enable');
         http.interceptors.request.use(request => {
             console.log('Starting Request', JSON.stringify(request, null, 2))
             return request
         })

         http.interceptors.response.use(response => {
             require('axios-debug-log/enable');
             console.log('Response:', JSON.stringify(response, null, 2))
             return response
         })


         return http.post("/cards", data);
    }
}
export default new CardDataService();