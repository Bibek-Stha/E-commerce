import axios from 'axios'
const axiosApi = axios.create({
    baseURL:'https://fakestoreapi.com/'
})

export default axiosApi