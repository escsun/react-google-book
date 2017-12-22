import * as React from "react";
import { connect } from "react-redux";
import Book from "../../components/Book";
import BookModel from "../../core/models/book.model";
import Books from "../../core/models/books.model";
import { RootState } from "../../core/reducers";
import { getBooks } from "../../core/selectors";

interface StateProps {
  books: Books;
}

class BooksPage extends React.PureComponent<StateProps, {}> {

  render() {
    return (
      <div>
        {this.props.books && this.props.books.items.map((book: BookModel) => <Book book={book} key={book.id}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    books: getBooks(state)
  };
};

export default connect(mapStateToProps)(BooksPage);
