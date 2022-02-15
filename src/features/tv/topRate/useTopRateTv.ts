import { useQuery } from "react-query";
import { topRatedApi } from "../../../apis/tvApi";
import { AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";
import { AxiosError } from "axios";

const useTopRate = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>("TopRateTv", topRatedApi);
};

export default useTopRate;
