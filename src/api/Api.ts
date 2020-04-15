import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs/internal/Observable';

import { RawFeed } from './../models/Feed';

class Api {
  public getFeed = (url: string): Observable<RawFeed> => {
    return ajax.getJSON<RawFeed>(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);
  };
}

export default new Api();
