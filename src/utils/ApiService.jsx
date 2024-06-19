import axios from 'axios'
const API_URL = "https://6670fbd9e083e62ee439aa9c.mockapi.io";

const ApiService = axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default ApiService