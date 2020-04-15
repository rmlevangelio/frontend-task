import * as React from 'react';

import { Item } from '../../models/Feed';

interface Props {
  type: string;
  items: Item[];
}

const List = ({ items, type }: Props) => {
  if (items?.length === 0) {
    return <p>No {type} found.</p>;
  }

  return (
    <ul>
      {items?.map(item => (
        <li key={item.guid}>
          <h3>{item.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
        </li>
      ))}
    </ul>
  );
};

export default List;
