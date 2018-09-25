import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-add',
  templateUrl: './players-add.component.html',
  styleUrls: ['./players-add.component.scss']
})
export class PlayersAddComponent implements OnInit {
  playerName: string;
  playerPosition: string;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  createPlayer() {
    const ob = this.httpService.create({name: this.playerName, position: this.playerPosition});
    ob.subscribe(data => {
      console.log('Player created!', data);
      this.playerName = '';
      this.playerPosition = '';
      this.router.navigate(['players/list']);
    });
  }

}
