import {Component} from '@angular/core';
import { HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'MEAN Stack';
  taskData = {};
  allTasks: Object;
  details: Object;

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got tasks from service: ", data);
      this.taskData = data;
    });
  }
  getAllTasks() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.allTasks = data;
    });
  }
  showDetails(task) {
    let observable = this._httpService.getSingleTask(task);
    observable.subscribe(data => {
      this.details = data;
    });
  }

  constructor(public _httpService: HttpService){
    this.getTasksFromService();
    this._httpService.getPokemon();
    this._httpService.getPokemonAbility(65);
  }

}
