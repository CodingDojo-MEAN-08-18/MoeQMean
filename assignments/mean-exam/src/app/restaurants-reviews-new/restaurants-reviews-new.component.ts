import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-restaurants-reviews-new',
  templateUrl: './restaurants-reviews-new.component.html',
  styleUrls: ['./restaurants-reviews-new.component.css']
})
export class RestaurantsReviewsNewComponent implements OnInit {
  userId: string;
  singleData: any = {};
  reviewer: string;
  stars: string;
  desc: string;
  error = false;
  errorMsg: string;
  createReviewData: any = {};

  constructor(
    private activated: ActivatedRoute,
    private httpServ: HttpService,
    private router: Router) { }

  ngOnInit() {
    this.userId = this.activated.snapshot.paramMap.get('id');

    this.getSingle();
  }

  getSingle() {
    const observable = this.httpServ.getSingle(this.userId);
    observable.subscribe(data => {
      console.log('Got single restaurant!', data);
      this.singleData = data;
    });
  }

  addReview() {
    const reviewData = {
      reviewer: this.reviewer,
      stars: this.stars,
      desc: this.desc
    };

    if (!this.reviewer || this.reviewer.length < 3) {
      this.error = true;
      this.errorMsg = 'Your name must contain at least 3 characters!';
    } else if (!this.desc || this.desc.length < 3) {
      this.error = true;
      this.errorMsg = 'Description must contain at least 3 characters!';
    } else {
      const observable = this.httpServ.addReview(this.userId, reviewData);
      observable.subscribe(data => {

        if (this.createReviewData.message !== 'Error') {
          this.router.navigate(['/restaurants/' + this.userId]);
        }

        console.log('Review added!', data);
      });
    }
  }

}
