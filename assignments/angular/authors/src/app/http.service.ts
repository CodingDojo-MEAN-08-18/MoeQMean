import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  new(data) {
    return this.http.post('/new', data);
  }
  getAuthors() {
    return this.http.get('/authors');
  }
  getSingleAuthor(id) {
    return this.http.get('/edit/'+ id);
  }
  editAuthor(id, data) {
    return this.http.post('/edit/'+ id, data);
  }
  deleteAuthor(id) {
    return this.http.post('/remove/'+ id, false);
  }
}
