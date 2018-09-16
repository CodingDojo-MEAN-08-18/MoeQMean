import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  newTask(data) {
    return this.http.post('/new', data);
  }
  getTasks() {
    return this.http.get('/task');
  }
  getSingleTask(id) {
    return this.http.get('/task/'+ id);
  }
  updateTask(id, data) {
    return this.http.post('/edit/'+ id, data);
  }
  deleteTask(id) {
    return this.http.post('/remove/'+ id, false);
  }
}
