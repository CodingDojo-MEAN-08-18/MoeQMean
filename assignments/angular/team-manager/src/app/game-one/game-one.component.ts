import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.scss']
})
export class GameOneComponent implements OnInit {
  playerData: Object;
  actionStatus: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    const ob = this.httpService.read();
    ob.subscribe(data => {
      this.playerData = data;
      console.log('Got players!', this.playerData);
    });
  }

  update(id, event) {
    this.actionStatus = event.path[0].innerText;
    const ob = this.httpService.update(id, {action: this.actionStatus});
    ob.subscribe(data => {
      console.log('Updated action!', data);
    });
    this.getPlayers();
  }

}
