import * as React from 'react';

import List from './components/List/List';
import Main from './containers/Main/Main';
import { Item } from './models/Feed';

export const App = () => {
  const [items, setItems] = React.useState<Item[]>(null);

  const onSubmit = values => {
    setItems(values);
  };

  const onError = () => {
    setItems(null);
  };
  return (
    <div className="container">
      <h1>Frontend task</h1>
      <Main onSubmit={onSubmit} onError={onError} />
      <List type="feeds" items={items} perPage={3} />
    </div>
  );
};
