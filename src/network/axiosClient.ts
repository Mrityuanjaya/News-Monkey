import axios from "axios";

const newsAxiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default newsAxiosClient;