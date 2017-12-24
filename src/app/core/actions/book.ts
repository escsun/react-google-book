import { BookConstants } from "../constants";

import IBook from "../models/book.model";

interface IGoogleBookRetrieve {
  type: BookConstants.GOOGLE_BOOK_RETRIEVE;
  payload: string;
}

interface IGoogleBookRetrieveSuccess {
  type: BookConstants.GOOGLE_BOOK_RETRIEVE_SUCCESS;
  payload: IBook;
}

interface IGoogleBookRetrieveError {
  type: BookConstants.GOOGLE_BOOK_RETRIEVE_ERROR;
  payload: string;
}

export const googleBookRetrieve = (payload: string): IGoogleBookRetrieve => {
  return {
    type: BookConstants.GOOGLE_BOOK_RETRIEVE,
    payload: payload
  };
};

export const googleBookRetrieveSuccess = (payload: IBook): IGoogleBookRetrieveSuccess => {
  return {
    type: BookConstants.GOOGLE_BOOK_RETRIEVE_SUCCESS,
    payload: payload
  };
};

export const googleBookRetrieveError = (payload: string): IGoogleBookRetrieveError => {
  return {
    type: BookConstants.GOOGLE_BOOK_RETRIEVE_ERROR,
    payload: payload
  };
};

export type BookAction =
  IGoogleBookRetrieve
  | IGoogleBookRetrieveError
  | IGoogleBookRetrieveSuccess;
