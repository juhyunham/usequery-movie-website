import { useQuery } from "react-query";
import { popularApi } from "../../../apis/tvApi";
import { AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";
import { AxiosError } from "axios";

const usePopular = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>("PopularTv", popularApi);
};

export default usePopular;
