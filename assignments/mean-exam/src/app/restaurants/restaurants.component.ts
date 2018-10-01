import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements AfterViewInit {
  restaurantData: any = {};

  constructor(
    public route: ActivatedRoute,
    private httpService: HttpService) {
  }

  ngAfterViewInit() {
    this.getAll();
  }

  getAll() {
    const observable = this.httpService.get();
    observable.subscribe(data => {
      console.log('Got all restaurants!', data);
      this.restaurantData = data;
    });
  }

}
