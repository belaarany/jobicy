import { axios } from "@/lib/axios";
import { Job } from "@/types/Job";

type GetJobsParams = {
  geo?: string | null;
  industry?: string | null;
};

type GetJobsResponseData = {
  jobs: Job[];
};

export const getJobs = async ({ geo, industry }: GetJobsParams) => {
  return axios.get<GetJobsResponseData>("/remote-jobs", {
    params: {
      geo,
      industry,
    },
  });
};
