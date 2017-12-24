import { Reducer } from "redux";
import { BookAction } from "../actions";
import { BookConstants } from "../constants";
import { RootState } from "./index";

import IBook from "../models/book.model";

export interface IBookState {
  item: IBook;
  error: string;
}

const initialState: IBookState = {
  item: null,
  error: null
};

export namespace BookQuery {
  export const getBook = (state: RootState) => state.book.item;
  export const getBookError = (state: RootState) => state.book.error;
}

export const bookReducer: Reducer<IBookState> = (state = initialState, action: BookAction) => {
  switch (action.type) {
    case BookConstants.GOOGLE_BOOK_RETRIEVE:
      return {...state, item: null, error: null};
    case BookConstants.GOOGLE_BOOK_RETRIEVE_SUCCESS:
      return {...state, isLoading: false, item: action.payload};
    case BookConstants.GOOGLE_BOOK_RETRIEVE_ERROR:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};
