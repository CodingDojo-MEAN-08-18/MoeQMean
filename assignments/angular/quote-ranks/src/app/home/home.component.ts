import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authorData: any = {};

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    const ob = this.httpService.read();
    ob.subscribe(data => {
      console.log('Got data', data);
      this.authorData = data;
    });
  }

  deleteAuthor(id) {
    const ob = this.httpService.delete(id);
    ob.subscribe(data => {
      console.log('Author deleted', data);
      this.getAuthors();
    });
  }

}
