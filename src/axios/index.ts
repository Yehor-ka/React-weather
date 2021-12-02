import axios from "axios";

const REACT_APP_API_URL = 'http://api.openweathermap.org/data/2.5'
const REACT_APP_API_KEY = 'b5296fdfe1260b735d4a9044b08fa884'

const api = axios.create({
    baseURL: REACT_APP_API_URL
})

api.interceptors.request.use(config => {
    config.url = config.url + '&units=metric' + '&appid=' + REACT_APP_API_KEY
    return config
})

export default api