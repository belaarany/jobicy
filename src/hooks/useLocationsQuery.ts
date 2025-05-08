import { useQuery } from "@tanstack/react-query";

import { getLocations } from "@/api/getLocations";

export const useLocationsQuery = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: getLocations,
    select: (data) => data.data.locations,
    staleTime: Infinity,
  });
};
