import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit, AfterViewInit {
  restaurantData: any = {};

  constructor(
    public route: ActivatedRoute,
    private httpService: HttpService,
    public router: Router) {
    // this.getAll();
    if (this.router.url === '/restaurants') {
      console.log('in restaurants');
    }
  }

  ngOnInit() {
    this.getAll();
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

  delete(id) {
    const ob = this.httpService.destroy(id);
    ob.subscribe(data => {
      console.log('Deleted an item');
      this.getAll();
    });
  }

}
