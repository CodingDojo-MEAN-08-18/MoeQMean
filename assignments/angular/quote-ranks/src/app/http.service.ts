import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // Create
  createAuthor(data) {
    return this.http.post('/new', data);
  }

  // Read
  read() {
    return this.http.get('/authors');
  }

  readSingle(id) {
    return this.http.get('/author/' + id);
  }

  getQuotes(id) {
    return this.http.get('/quotes/' + id);
  }

  // Update
  update(id, data) {
    return this.http.post('/edit/' + id, data);
  }

  createQuote(id, data) {
    return this.http.post('/add/quote/' + id, data);
  }

  vote(id, data) {
    return this.http.post('/votes/' + id, data);
  }

  // Delete
  delete(id) {
    return this.http.post('/remove/' + id, false);
  }
  deleteQuote(id) {
    return this.http.post('/remove/quote/' + id, false);
  }
}
