import * as React from "react";
import { connect } from "react-redux";
import Pagination from "../../components/Pagination";
import IBooksRoute from "../../core/models/books-route.model";
import { RootState } from "../../core/reducers";
import { BooksQuery } from "../../core/reducers/books";

interface IStateProps {
  pages: number;
  route: IBooksRoute;
}

class PaginationPage extends React.Component<IStateProps> {
  render() {
    if (!this.props.route) {
      return "";
    }
    return (
      <nav className="pagination-page">
        <Pagination pages={this.props.pages} route={this.props.route} />
      </nav>
    );
  }
}

const mapStateToProps = (state: RootState): IStateProps => ({
  pages: BooksQuery.getBooksPages(state),
  route: BooksQuery.getBooksRoute(state)
});

export default connect(mapStateToProps)(PaginationPage);
