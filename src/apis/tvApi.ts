import axiosInstance from "./index";

// 최근상영작
export const lastestApi = () => axiosInstance.get("/tv/latest");

// 오늘 상영한 TV 프로그램
export const airingTodayApi = () => axiosInstance.get("/tv/airing_today");

// 현재 상영중인 TV 프로그램
export const onTheAirApi = () => axiosInstance.get("/tv/on_the_air");

// 인기있는 TV 프로그램
export const popularApi = () => axiosInstance.get("/tv/popular");

// Top rank
export const topRatedApi = () => axiosInstance.get("/tv/top_rated");

// 상세정보 순위
export const detailApi = (tvId: string) => axiosInstance.get(`/tv/${tvId}`);

// 해당영화와 유사한 영화를 볼수 있는 API 순위
export const similarApi = (tvId: string) => axiosInstance.get(`/tv/${tvId}/similar`);

// 영화목록 검색 API
export const searchApi = (query: string) => axiosInstance.get(`/search/tv?query=${query}`);
