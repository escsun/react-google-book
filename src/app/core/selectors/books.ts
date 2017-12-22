import { RootState } from "../reducers";

export const getBooks = (state: RootState) => state.books;
export const getBookById = (state: RootState) => state.books.bookById;
