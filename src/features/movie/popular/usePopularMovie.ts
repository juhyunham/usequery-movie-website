import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { popularApi } from "../../../apis/movieApi";
import { ListResponse, MovieDetail } from "../../../types";

const usePopularMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>("PopularMovie", popularApi);
};

export default usePopularMovie;
