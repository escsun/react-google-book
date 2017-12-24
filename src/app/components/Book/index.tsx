import * as React from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import Loader from "../../common/Loader";

import {
  createMarkup,
  createMarkupShorter
} from "../../utils/markup";

import IBook from "../../core/models/book.model";

interface IProps {
  book: IBook;
  fullVersion?: boolean;
}

class Book extends React.Component<IProps> {
  render() {
    const {book} = this.props;
    return (
      <div className="book">
        <div className="book-wrapper">
          <h1 className="book-wrapper__title">{book.volumeInfo.title}</h1>
          <h2 className="book-wrapper__subtitle">{book.volumeInfo.subtitle}</h2>
          {this.props.book.volumeInfo.imageLinks && this.props.book.volumeInfo.imageLinks.thumbnail && (
            <img
              className="book-wrapper__image"
              src={this.props.book.volumeInfo.imageLinks.thumbnail}
              alt={this.props.book.volumeInfo.title}
            />
          )}
          {this.props.book.volumeInfo.description && (
            <p
              className="book-wrapper__description"
              dangerouslySetInnerHTML={
                this.props.fullVersion
                  ? createMarkup(this.props.book.volumeInfo.description)
                  : createMarkupShorter(this.props.book.volumeInfo.description, 150)
              }
            />
          )}
          {this.props.fullVersion
            ? ""
            : (
              <Link to={"/book/" + book.id} className="book-wrapper__link" role="button">More info</Link>
            )}
        </div>
      </div>
    );
  }
}

export default Loader("book")(Book);
