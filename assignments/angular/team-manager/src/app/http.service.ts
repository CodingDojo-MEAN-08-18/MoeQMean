import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // Defining C.R.U.D Functions below
  create(data) {
    return this.http.post('/new', data);
  }
  read() {
    return this.http.get('/players');
  }
  update(id, data) {
    return this.http.post('/edit/' + id, data);
  }
  delete(id) {
    return this.http.post('/remove/' + id, false);
  }
}
