import {Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Anonymous Notes';
  note: string;
  noteData: any = {};
  formattedDate: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    const ob = this.httpService.get();
    ob.subscribe(data => {
      console.log('Got the data:', data);
      this.noteData = data;
    });
  }

  createNote() {
    const ob = this.httpService.create({note: this.note});
    ob.subscribe(data => {
      console.log('Created note:', data);

      this.getNotes();
    });
  }

  // delete(id) {
  //   const ob = this.httpService.delete(id);
  //   ob.subscribe(data => {
  //     console.log('Deleted note:', data);
  //
  //     this.getNotes();
  //   });
  // }
}
