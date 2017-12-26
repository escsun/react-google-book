import * as React from "react";
import { Link } from "react-router-dom";

const times = require("lodash/times");

import "./index.scss";

interface IProps {
  pages: number;
  query: string;
}

const Pagination = (props: IProps): JSX.Element => {
  const {pages, query} = props;
  return (
    <ul className="pagination">
      {times(pages, (i: number) => (
        <li className="pagination__item" key={i + 1}>
          <Link className="pagination__link" to={`/books/${query}/${i + 1}`}>{i + 1}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
