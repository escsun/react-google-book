import * as React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

import {
  createMarkup,
  createMarkupShorter
} from "../../utils/markup";

import IBook from "../../core/models/book.model";

interface Props {
  book: IBook;
  fullVersion?: boolean;
}

class Book extends React.Component<Props, {}> {
  render() {
    return (
      <div className="_book">
        <div className="container-book">
          <h1 className="title">{this.props.book.volumeInfo.title}</h1>
          {this.props.book.volumeInfo.subtitle && (
            <h2 className="subtitle">{this.props.book.volumeInfo.subtitle}</h2>
          )}
          {this.props.book.volumeInfo.imageLinks && this.props.book.volumeInfo.imageLinks.thumbnail && (
            <img
              className="image"
              src={this.props.book.volumeInfo.imageLinks.thumbnail}
              alt={this.props.book.volumeInfo.title}
            />
          )}
          {this.props.book.volumeInfo.description && (
            <p
              className="description"
              dangerouslySetInnerHTML={
                this.props.fullVersion
                  ? createMarkup(this.props.book.volumeInfo.description)
                  : createMarkupShorter(this.props.book.volumeInfo.description, 150)
              }
            />
          )}
          {this.props.fullVersion ? "" : (
            <Link to={"/book/" + this.props.book.id} className="link" role="button">More info</Link>
          )}
        </div>
      </div>
    );
  }
}

export default Book;
