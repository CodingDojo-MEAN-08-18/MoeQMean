import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quotes-new',
  templateUrl: './quotes-new.component.html',
  styleUrls: ['./quotes-new.component.scss']
})
export class QuotesNewComponent implements OnInit {
  quote: string;
  userID: string;
  userData: any = {};

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    const ob = this.httpService.readSingle(this.userID);
    ob.subscribe(data => {
      this.userData = data;
      console.log(this.userData);
    });
  }

  createQuote() {
    const ob = this.httpService.createQuote(this.userID, {quote: this.quote});
    ob.subscribe(data => {
      console.log('Quote added!', data);
      window.location.href = '/#/quotes/' + this.userID;
    });
  }

}
