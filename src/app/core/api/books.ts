import axios, {
  AxiosError,
  AxiosResponse
} from "axios";

import { ApiEndpointUrl } from "../constants";

export const fetchGoogleBooksByQuery = () => {
  return null;
};

export const retrieveGoogleBook = (volumeId: string) => {
  return axios.get(`${ApiEndpointUrl.GOOGLE_BOOKS_SELECT}/${volumeId}`)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => error);
};
