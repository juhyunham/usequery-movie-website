import { useQuery } from "react-query";
import { airingTodayApi } from "../../../apis/tvApi";
import { AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";
import { AxiosError } from "axios";

const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>("airingTodayTv", airingTodayApi);
};

export default useAiringTodayTv;
