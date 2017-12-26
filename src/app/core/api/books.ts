import axios, {
  AxiosError,
  AxiosResponse
} from "axios";

import IBooks from "../models/books.model";

import { ApiEndpointUrl } from "../constants";

/**
 * @param bookTitle: string;
 * @param startIndex: number; 1..n
 * @param maxResults: string; 1..40
 * @param projection: string; full / lite
 * @return Promise<IBooks>
 */
export const fetchGoogleBooksByQuery = (bookTitle: string,
                                        startIndex: number = 1,
                                        maxResults: number = 40,
                                        projection: string = "full"): Promise<IBooks> => {
  // https://www.googleapis.com/books/v1/volumes?q=test&startIndex=1&&maxResults=40&projection=full
  const startIndexByPages = +startIndex === 1 ? 1 : 1 + (startIndex * maxResults);
  const queryUrl = ApiEndpointUrl.GOOGLE_BOOKS_BY_QUERY
    + bookTitle
    + "&startIndex=" + startIndexByPages
    + "&maxResults=" + maxResults
    + "&projection=" + projection;
  console.log(queryUrl);
  return axios.get(queryUrl)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => {
      throw error.response.data.error.message;
    });
};
