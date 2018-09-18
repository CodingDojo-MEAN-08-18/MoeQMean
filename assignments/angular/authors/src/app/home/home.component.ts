import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

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
    let observable = this.httpService.getAuthors();
    observable.subscribe(data => {
      this.authorData = data;
      console.log(this.authorData);
    })
  }

}