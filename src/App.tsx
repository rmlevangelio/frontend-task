import * as React from 'react';

import List from './components/List/List';
import Main from './containers/Main/Main';
import { Item } from './models/Feed';

export const App = () => {
  const [items, setItems] = React.useState<Item[]>(null);

  const onSubmit = values => {
    setItems(values);
  };

  return (
    <>
      <h1>Frontend task</h1>
      <Main onSubmit={onSubmit} />
      <List type="feeds" items={items} />
    </>
  );
};
