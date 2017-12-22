import axios, {
  AxiosError,
  AxiosResponse
} from "axios";

import { ApiEndpointUrl } from "../constants";

export const fetchGoogleBooksByQuery = (bookTitle: string) => {
  return axios.get(ApiEndpointUrl.GOOGLE_BOOKS_QUERY + bookTitle)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => {
      console.log(error);
      throw error;
    });
};

export const retrieveGoogleBook = (volumeId: string) => {
  return axios.get(`${ApiEndpointUrl.GOOGLE_BOOKS_SELECT}/${volumeId}`)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => {
      throw error.response.data.error.message;
    });
};
