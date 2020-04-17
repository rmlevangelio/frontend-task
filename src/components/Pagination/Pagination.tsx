import * as React from 'react';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  handlePageNumberClick: (pageNumber: number) => void;
}

const Pagination = ({ totalItems, itemsPerPage, handlePageNumberClick }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(num => (
        <li key={num} className="page-item">
          <a
            className="page-link"
            onClick={() => handlePageNumberClick(num)}
            href={`#pagination-${num}`}
          >
            {num}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
