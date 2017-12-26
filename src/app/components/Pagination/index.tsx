import * as React from "react";
import { Link } from "react-router-dom";

const times = require("lodash/times");

import "./index.scss";
import IBooksRoute from "../../core/models/books-route.model";

interface IProps {
  pages: number;
  route: IBooksRoute;
}

const Pagination = (props: IProps): JSX.Element => {
  return (
    <ul className="pagination">
      {times(props.pages, (i: number) => (
        <li className="pagination__item" key={i + 1}>
          <Link className="pagination__link" to={`/books/${props.route.query}/${i + 1}`}>{i + 1}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
