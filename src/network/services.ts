import newsAxiosClient from "./axiosClient";

export const getNews = async () => {
    const res = await newsAxiosClient.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`)
    return res.data;
}