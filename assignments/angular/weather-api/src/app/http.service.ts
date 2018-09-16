import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiKey = '4dc8f4629ecfb4df0d999d473591e03d';

  constructor(private http: HttpClient) { }

    getWeather(city){
      return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&units=imperial' + '&APPID='+this.apiKey);
    }
}
