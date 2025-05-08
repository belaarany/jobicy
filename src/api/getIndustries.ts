import { axios } from "@/lib/axios";
import { Industry } from "@/types/Industry";

type GetIndustriesResponseData = {
  industries: Industry[];
};

export const getIndustries = () => {
  return axios.get<GetIndustriesResponseData>("/remote-jobs", {
    params: {
      get: "industries",
    },
  });
};
