import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.popcoupon.co.za/v1',
  headers: {
    'content-type': 'application/json'

  }

})
