import { RootState } from "../reducers";

export const getBooks = (state: RootState) => state.books.books;
export const getBookById = (state: RootState) => state.books.bookById;
export const getErrorBookLoading = (state: RootState) => state.books.errorBookLoading;
