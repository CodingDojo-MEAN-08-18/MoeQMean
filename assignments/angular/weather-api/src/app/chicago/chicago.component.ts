import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.scss']
})
export class ChicagoComponent implements OnInit {
  weatherData:any = {};

  constructor(private httpService: HttpService) { }

  getChicago() {
    let observable = this.httpService.getWeather('chicago');
    observable.subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
  }

  ngOnInit() {
    this.getChicago();
  }

}
