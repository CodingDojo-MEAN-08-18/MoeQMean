import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  gitApi = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post('/', data);
  }
  get() {
    return this.http.get('/battles');
  }

  gitRequest(user) {
    return this.http.get(this.gitApi + '/users/' + user + '?access_token=938b03edcf599ccb4dc24a6782d28e39e02b4bc2');
  }
}
