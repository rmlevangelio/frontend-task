import * as React from 'react';

import { Item } from '../../models/Feed';
import Pagination from '../Pagination/Pagination';

interface Props {
  type: string;
  items: Item[];
  perPage?: number;
}

const List = ({ items, type, perPage = 3 }: Props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(perPage);

  if (!items) {
    return null;
  }

  if (items?.length === 0) {
    return <p>No {type} found.</p>;
  }

  const lastItemIndex = currentPage + itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = items.slice(firstItemIndex, lastItemIndex);

  const handlePageNumberClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ul>
        {currentItems.map(item => (
          <li key={item.guid}>
            <h4>{item.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: item.description }} />
          </li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        handlePageNumberClick={handlePageNumberClick}
      />
    </>
  );
};

export default List;
