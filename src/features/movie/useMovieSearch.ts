import { useQuery } from "react-query";
import { searchApi } from "../../apis/movieApi";
import { AxiosResponse, AxiosError } from "axios";
import { ListResponse, Movie } from "./../../types";

const useMovieSearch = (query: string) => {
  return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(["searchMovie", query], () => searchApi(query), {
    enabled: Boolean(query),
  });
};

export default useMovieSearch;
