import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  playerData: Object;

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

  deletePlayer(id) {
    if (confirm('Are you sure you want to delete this player?')) {
      const ob = this.httpService.delete(id);
      ob.subscribe(data => {
        console.log('Player deleted!', data);
        this.getPlayers();
      });
    } else {
      // do nothing
    }
  }

}
