import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private router: Router) { }

  create(data) {
    return this.http.post('/new', data);
  }

  get() {
    return this.http.get('/get');
  }

  getSingle(id) {
    return this.http.get('get/' + id);
  }

  updateSingle(id, data) {
    return this.http.post('/edit/' + id, data);
  }

  addReview(id, data) {
    return this.http.post('/add/review/' + id, data);
  }

  getReviews(id) {
    return this.http.get('/reviews/' + id);
  }

  destroy(id) {
    return this.http.post('/remove/' + id, false);
  }
}
