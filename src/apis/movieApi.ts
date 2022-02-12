import axiosInstance from "./index";

// 최근상영작
export const lastestApi = () => axiosInstance.get("/movie/latest");

// 개봉예정작
export const upcomingApi = () => axiosInstance.get("/movie/upcoming");

// 현재상영작
export const nowPlayingApi = () => axiosInstance.get("/movie/now_playing");

// 상영작 순위
export const topRatedApi = () => axiosInstance.get("./movie/top_rated");

// 인기 순위
export const popularApi = () => axiosInstance.get("./movie/popular");

// 상세정보 순위
export const datailApi = (movieId: string) => axiosInstance.get(`./movie/${movieId}`);

// 해당영화와 유사한 영화를 볼수 있는 API 순위
export const similarApi = (similarApi: string) => axiosInstance.get(`./movie/${similarApi}/similar`);

// 영화목록 검색 API
export const searchApi = (query: string) => axiosInstance.get(`./search/movie?query=${query}`);
