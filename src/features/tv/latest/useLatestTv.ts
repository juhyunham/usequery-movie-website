import { useQuery } from "react-query";
import { latestApi } from "../../../apis/tvApi";
import { AxiosResponse } from "axios";
import { TVDetail } from "./../../../types";
import { AxiosError } from "axios";

const useLatestTv = () => {
  return useQuery<AxiosResponse<TVDetail>, AxiosError>("latesetTv", latestApi);
};

export default useLatestTv;
