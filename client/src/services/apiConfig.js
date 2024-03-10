import axios from "axios";

const dev = "http://localhost:8000"
// const prod = ""
const api = `${dev}/api/v1`

const apiClient = axios.create({
  baseURL : api,
  withCredentials: false,
  headers : {
    Accept : 'application/json',
    'Content-Type' : 'application/json'
  }
})

export default apiClient;