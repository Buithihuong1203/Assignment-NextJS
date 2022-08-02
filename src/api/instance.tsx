import axios from "axios"
const instance = axios.create({
    baseURL: "http://localhost:8000"
})
instance.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
)
export default instance
