import { useQuery } from "@tanstack/react-query";

import { getJobs } from "@/api/getJobs";

type UseJobsQueryParams = {
  filters: {
    location: string | null;
    industry: string | null;
  };
};

export const useJobsQuery = ({ filters }: UseJobsQueryParams) => {
  return useQuery({
    queryKey: ["jobs", filters],
    queryFn: () =>
      getJobs({
        geo: filters.location,
        industry: filters.industry,
      }),
    select: (data) => data.data.jobs,
  });
};
