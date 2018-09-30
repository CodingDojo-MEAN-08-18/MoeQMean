import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  battleData: any = {};
  playerOneData: Object;
  playerTwoData: Object;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getLastBattle();
  }

  getLastBattle() {
    const ob = this.httpService.get();
    ob.subscribe(data => {
      console.log('Got user data', data);
      this.battleData = data;

      if (this.battleData.data[0].score > this.battleData.data[1].score) {
        this.playerOneData = this.battleData.data[0];
        this.playerTwoData = this.battleData.data[1];
      } else if (this.battleData.data[1] > this.battleData.data[0].score) {
        this.playerOneData = this.battleData.data[1];
        this.playerTwoData = this.battleData.data[0];
      }
    });
  }

}
