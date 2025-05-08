import { axios } from "@/lib/axios";
import { Location } from "@/types/Location";

type GetLocationsResponseData = {
  locations: Location[];
};

export const getLocations = () => {
  return axios.get<GetLocationsResponseData>("/remote-jobs", {
    params: {
      get: "locations",
    },
  });
};
