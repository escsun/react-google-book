import * as React from "react";
import { connect } from "react-redux";
import Pagination from "../../components/Pagination";
import { RootState } from "../../core/reducers";
import { BooksQuery } from "../../core/reducers/books";

interface IStateProps {
  pages: number;
  query: string;
}

class PaginationPage extends React.Component<IStateProps> {
  render() {
    return (
      <nav className="pagination-page">
        <Pagination pages={this.props.pages} query={this.props.query} />
      </nav>
    );
  }
}

const mapStateToProps = (state: RootState): IStateProps => ({
  pages: BooksQuery.getBooksPages(state),
  query: BooksQuery.getBooksQuery(state)
});

export default connect(mapStateToProps)(PaginationPage);
