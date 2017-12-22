import * as React from "react";
import { connect } from "react-redux";
import IBooks from "../../core/models/books.model";
import { RootState } from "../../core/reducers";
import { getBooks } from "../../core/selectors";
import Books from "../../components/Books";

interface StateProps {
  books: IBooks;
}

class BooksPage extends React.PureComponent<StateProps, {}> {

  render() {
    const {books} = this.props;
    return (
      <Books books={books}/>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    books: getBooks(state)
  };
};

export default connect(mapStateToProps)(BooksPage);
