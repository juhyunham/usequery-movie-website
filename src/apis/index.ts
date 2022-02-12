import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "ko-KR",
  },
});

export default axiosInstance;
