import { useQuery } from "react-query";
import { onTheAirApi } from "../../../apis/tvApi";
import { AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";
import { AxiosError } from "axios";

const useOnTheAirTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>("onTheAirTv", onTheAirApi);
};

export default useOnTheAirTv;
