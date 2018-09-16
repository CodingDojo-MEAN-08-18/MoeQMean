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
  singleData: Object;

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
      if (data.data) {
        this.taskData = data.data;
        console.log(this.taskData);
      }
    });
  }

  getSingleTask(id) {
    let observable = this.httpService.getSingleTask(id);
    observable.subscribe(data => {
      this.singleData = data.data;
      this.updateTitle = this.singleData.title;
      this.updateDesc = this.singleData.description;
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
