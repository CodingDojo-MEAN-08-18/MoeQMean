import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  userID: string;
  quoteID: string;
  vote: number;
  userData: any = {};
  quoteData: any = {};

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.getData();
    this.getQuotes();
  }

  getData() {
    const ob = this.httpService.readSingle(this.userID);
    ob.subscribe(data => {
      this.userData = data;
      console.log(this.userData);
    });
  }

  getQuotes() {
    const ob = this.httpService.getQuotes(this.userID);
    ob.subscribe(data => {
      this.quoteData = data;

      // if (this.quoteData.quotes)
      console.log(this.quoteData);
    });
  }

  voteUp(id, vote) {
    if (vote === undefined) {
      this.vote = 0;
    }  else {
      this.vote = vote;
    }
    this.vote++;
    const ob = this.httpService.vote(id, {vote: this.vote});
    ob.subscribe(data => {
      console.log('Voted up!', data);

      this.getQuotes();
    });
  }

  voteDown(id, vote) {
    if (vote === undefined) {
      this.vote = 0;
    }  else {
      this.vote = vote;
    }
    this.vote--;
    const ob = this.httpService.vote(id, {vote: this.vote});
    ob.subscribe(data => {
      console.log('Voted up!', data);

      this.getQuotes();
    });
  }

  deleteQuote(id) {
    const ob = this.httpService.deleteQuote(id);
    ob.subscribe(data => {
      console.log('Quote deleted', data);

      this.getQuotes();
    });
  }

}
