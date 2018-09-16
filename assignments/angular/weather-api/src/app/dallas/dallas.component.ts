import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss']
})
export class DallasComponent implements OnInit {
  weatherData:any = {};

  constructor(private httpService: HttpService) { }

  getDallas() {
    let observable = this.httpService.getWeather('dallas');
    observable.subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
  }

  ngOnInit() {
    this.getDallas();
  }

}
