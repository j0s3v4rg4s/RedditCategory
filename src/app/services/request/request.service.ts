import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getCategories() {
	  return this.http.get<Categories>('https://www.reddit.com/reddits.json').toPromise()
  }
}
