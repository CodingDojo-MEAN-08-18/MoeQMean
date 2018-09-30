import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  gitApi = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post('/new', data);
  }
  get() {
    return this.http.get('/battles');
  }

  gitRequest(user) {
    // return this.http.get(this.gitApi + '/users/' + user + '?access_token=f6bcaef7a706a237b91185ee737e13c5a5be6d6c');
    return this.http.get(this.gitApi + '/users/' + user);
  }
}
