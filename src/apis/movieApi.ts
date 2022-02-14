import axiosInstance from "./index";

export const latestApi = () => axiosInstance.get("/movie/latest");

export const upcomingApi = () => axiosInstance.get("/movie/upcoming");

export const nowPlayingApi = () => axiosInstance.get("/movie/now_playing");

export const topRatedApi = () => axiosInstance.get("/movie/top_rated");

export const popularApi = () => axiosInstance.get("/movie/popular");

export const detailApi = (movieId: string) => axiosInstance.get(`/movie/${movieId}`);

export const similarApi = (id: string) => axiosInstance.get(`/movie/${id}/similar`);

export const searchApi = (query: string) => axiosInstance.get(`/search/movie?query=${query}`);
