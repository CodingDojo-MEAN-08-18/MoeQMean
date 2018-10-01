import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-restaurants-reviews',
  templateUrl: './restaurants-reviews.component.html',
  styleUrls: ['./restaurants-reviews.component.css']
})
export class RestaurantsReviewsComponent implements OnInit {
  userId: string;
  reviewData: any = {};

  constructor(private activated: ActivatedRoute, private httpServ: HttpService) { }

  ngOnInit() {
    this.userId = this.activated.snapshot.paramMap.get('id');
    console.log(this.userId);

    this.getReviews();
  }

  getReviews() {
    const ob = this.httpServ.getReviews(this.userId);
    ob.subscribe(data => {
      console.log('Got reviews!', data);
      this.reviewData = data;
    });
  }

}
