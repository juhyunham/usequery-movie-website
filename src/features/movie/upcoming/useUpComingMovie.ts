import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { upcomingApi } from "../../../apis/movieApi";
import { ListResponse, MovieDetail } from "../../../types";

const useUpComingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>("topRateMovie", upcomingApi);
};

export default useUpComingMovie;
