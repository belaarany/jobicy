import { useQuery } from "@tanstack/react-query";

import { getIndustries } from "@/api/getIndustries";

export const useIndustriesQuery = () => {
  return useQuery({
    queryKey: ["industries"],
    queryFn: getIndustries,
    select: (data) => data.data.industries,
    staleTime: Infinity,
  });
};
