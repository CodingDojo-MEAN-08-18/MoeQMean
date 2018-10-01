import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  registerUser(data) {
    return this.http.post('/register', data);
  }

  loginUser(data) {
    return this.http.post('/login', data);
  }
}
