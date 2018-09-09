import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  newAuthor() {
    let tempObservable = this.http.post('/new', false);
    tempObservable.subscribe(data => console.log('Made a new author: ', data));
  }
}
