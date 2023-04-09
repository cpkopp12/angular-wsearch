import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const observable = new Observable(observer => {
  observer.next(1);
})

observable.subscribe((value) => {
  console.log(value);
});
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  public search(term: string) {
    return this.http.get('https://en.wikipedia.org/w/api.php?', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }

}
