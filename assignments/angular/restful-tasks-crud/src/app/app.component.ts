import { Component } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'RESTful C.R.U.D';
  title: string;
  desc: string;
  updateTitle: string;
  updateDesc: string;

  taskData: Object;
  singleData: any = {};

  constructor(private httpService: HttpService) {
    this.getTask();
  }

  newTask() {
    let observable = this.httpService.newTask({title: this.title, desc: this.desc});
    observable.subscribe(data => {
      console.log('Task has been submitted: ', data);
      this.title = '';
      this.desc = '';
      this.getTask();
    });
  }

  getTask() {
    let observable = this.httpService.getTasks();
    observable.subscribe(data => {
      this.taskData = data;
    });
  }

  getSingleTask(id) {
    let observable = this.httpService.getSingleTask(id);
    observable.subscribe(data => {
      this.singleData = data;
      this.updateTitle = this.singleData.data.title;
      this.updateDesc = this.singleData.data.description;
    });
  }

  updateTask(id) {
    let observable = this.httpService.updateTask(id, {title: this.updateTitle, description: this.updateDesc});
    observable.subscribe(data => {
      console.log('Edit success:', data);
    });
    this.getTask();
  }

  deleteTask(id) {
    let observable = this.httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log('Delete success: ', data);
      this.getTask();
    });
  }
}
