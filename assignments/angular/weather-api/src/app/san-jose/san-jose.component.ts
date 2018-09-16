import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.scss']
})
export class SanJoseComponent implements OnInit {

  weatherData:any = {};

  constructor(private httpService: HttpService) { }

  getSanJose() {
    let observable = this.httpService.getWeather('san jose');
    observable.subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
  }

  ngOnInit() {
    this.getSanJose();
  }
}
