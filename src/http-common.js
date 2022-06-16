import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost/popcoupon/v1',
  headers: {
    'content-type': 'application/json'

  }

})
