import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.scss']
})
export class SeattleComponent implements OnInit {

  weatherData:any = {};

  constructor(private httpService: HttpService) { }

  getSeattle() {
    let observable = this.httpService.getWeather('seattle');
    observable.subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
  }

  ngOnInit() {
    this.getSeattle();
  }

}
