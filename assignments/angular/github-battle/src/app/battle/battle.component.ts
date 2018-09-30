import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  title = 'Github Battle';
  playerOne: string;
  playerTwo: string;
  playerOneScore: any;
  playerTwoScore: any;

  gitObjOne: any = {};
  gitObjTwo: any = {};

  constructor(
    private httpService: HttpService,
    private router: Router) { }

  ngOnInit() {
  }

  gitPlayer(user: string, event) {
    const ob = this.httpService.gitRequest(user);
    ob.subscribe(data => {
      console.log('Got user!', data);
      console.log(event);
      if (event.path[0].name === 'player1') {
        this.gitObjOne = data;
        this.playerOneScore = (this.gitObjOne.public_repos + this.gitObjOne.followers) * 12;

        console.log('Player one score:', this.playerOneScore);
        const player1Data = {
          name: this.gitObjOne.name,
          score: this.playerOneScore,
          imgUrl: this.gitObjOne.avatar_url
        };
        const ob1 = this.httpService.create(player1Data);
        ob1.subscribe(data1 => {
          console.log('User saved', data1);
        });
      }
      if (event.path[0].name === 'player2') {
        this.gitObjTwo = data;

        this.playerTwoScore = (this.gitObjTwo.public_repos + this.gitObjTwo.followers) * 12;

        console.log('Player two score:', this.playerTwoScore);

        const player2Data = {
          name: this.gitObjTwo.name,
          score: this.playerTwoScore,
          imgUrl: this.gitObjTwo.avatar_url
        };

        const ob2 = this.httpService.create(player2Data);
        ob2.subscribe(data2 => {
          console.log('User saved', data2);
        });
      }
    });
  }

  battle() {
    if (this.playerOneScore > this.playerTwoScore) {
      console.log('Player one won!');
    } else {
      console.log('Player two won!');
    }
    this.router.navigate(['/results']);
  }

}
