
import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8000',
  // baseURL: 'https://api.arcpdx.org',
//   headers: {
//     Authorization: 'Bearer {token}'
//   }
})