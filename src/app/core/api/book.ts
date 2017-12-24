import axios, {
  AxiosError,
  AxiosResponse
} from "axios";

import { ApiEndpointUrl } from "../constants";

export const fetchGoogleBookRetrieve = (volumeId: string) => {
  return axios.get(`${ApiEndpointUrl.GOOGLE_BOOKS_RETRIEVE}/${volumeId}`)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => {
      throw error.response.data.error.message;
    });
};
