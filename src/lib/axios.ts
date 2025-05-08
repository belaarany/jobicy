import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://jobicy.com/api/v2",
});
