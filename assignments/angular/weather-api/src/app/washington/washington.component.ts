import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.scss']
})
export class WashingtonComponent implements OnInit {
  weatherData:any = {};

  constructor(private httpService: HttpService) { }

  getDC() {
    let observable = this.httpService.getWeather('Washington DC., US');
    observable.subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
  }

  ngOnInit() {
    this.getDC();
  }
}
