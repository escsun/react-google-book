import axios, {
  AxiosError,
  AxiosResponse
} from "axios";

import { ApiEndpointUrl } from "../constants";

export const fetchGoogleBooksByQuery = (bookTitle: string) => {
  // startIndex 1 to ..
  // maxResults 0..40
  // projection fuLL | lite
  return axios.get(ApiEndpointUrl.GOOGLE_BOOKS_BY_QUERY + bookTitle + "&maxResults=40&projection=full")
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => {
      throw error.response.data.error.message;
    });
};
