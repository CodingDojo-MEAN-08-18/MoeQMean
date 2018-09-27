import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post('/', data);
  }
  get() {
    return this.http.get('/battles');
  }
}
