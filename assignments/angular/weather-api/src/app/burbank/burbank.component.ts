import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.scss']
})
export class BurbankComponent implements OnInit {
  weatherData:any = {};

  constructor(private httpService: HttpService) { }

  getBurbank() {
    let observable = this.httpService.getWeather('burbank');
    observable.subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    })
  }

  ngOnInit() {
    this.getBurbank();
  }

}
