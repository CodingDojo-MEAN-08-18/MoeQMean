import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getSingleTask('clean your room');
    // this.newTask('go to work');
  }

  getTasks() {
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log('Got our tasks: ', data));
  }
  getSingleTask(task){
    let tempObservable = this._http.get('/'+ task);
    tempObservable.subscribe(data => console.log('Got single task: ', data));
  }
  newTask(task){
    let tempObservable = this._http.get('/new/'+ task);
    tempObservable.subscribe(data => console.log('Created new task: ', data));
  }
}
