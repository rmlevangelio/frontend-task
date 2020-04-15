import * as React from 'react';

import Api from '../../api/Api';
import { Item } from '../../models/Feed';

interface Props {
  onSubmit: (values: Item[]) => void;
}

const validateInput = (value: string) => {
  if (!value) {
    return 'Please enter a valid url.';
  }

  if (
    !value.match(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/)
  ) {
    return 'Please enter a valid url.';
  }

  return null;
};

const Main = ({ onSubmit }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [error, setError] = React.useState(validateInput(''));
  const [serverError, setServerError] = React.useState(null);
  const [touched, setTouched] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setTouched(true);

    if (error) {
      inputRef.current.focus();
      return;
    }

    setLoading(true);
    Api.getFeed(inputRef.current.value).subscribe(
      res => {
        setLoading(false);
        onSubmit(res.items);
      },
      err => {
        setLoading(false);
        setServerError(err);
      },
    );
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const error = validateInput(e.target.value);
    setError(error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Sample rss url:</p>
      <p>https://blogs.nasa.gov/stationreport/feed/</p>
      <label>
        <strong>Please type the rss url here:</strong>
      </label>
      <input ref={inputRef} onChange={handleOnChange} name="rssUrl" />
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>

      {touched && error && <p style={{ color: '#dc3545' }}>{error}</p>}
      {serverError && <p style={{ color: '#dc3545' }}>{serverError.message}</p>}
    </form>
  );
};

export default Main;
