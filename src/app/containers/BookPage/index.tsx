import * as React from "react";
import { connect } from "react-redux";
import {
  bindActionCreators,
  Dispatch
} from "redux";

import Loader from "../../common/Loader";
import Book from "../../components/Book";
import BookModel from "../../core/models/book.model";

import { RootState } from "../../core/reducers";
import { googleBooksRetrieve } from "../../core/actions";
import { getBookById } from "../../core/selectors";

interface StateProps {
  book: BookModel;
}

interface DispatchProps {
  actions: {
    googleBooksRetrieve: typeof googleBooksRetrieve;
  };
}

class BookPage extends React.PureComponent<StateProps & DispatchProps, {}> {

  componentDidMount() {
    // setTimeout(() =>  this.props.actions.googleBooksRetrieve("vHlTOVTKHeUC"), 1000);
    // TODO update URI
    this.props.actions.googleBooksRetrieve("vHlTOVTKHeUC");
  }

  render() {
    return this.props.book ? <Book book={this.props.book}/> : <Loader/>;
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    book: getBookById(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  actions: bindActionCreators({googleBooksRetrieve}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
