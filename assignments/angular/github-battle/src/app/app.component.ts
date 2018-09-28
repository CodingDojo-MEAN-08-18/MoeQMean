import { Component } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Github Battle';
  playerOne:string;
  playerTwo:string;

  gitObjOne: Object;
  gitObjTwo: Object;

  constructor(private httpService: HttpService) { }

  gitPlayer(user:string, event) {
    let ob = this.httpService.gitRequest(user);
    ob.subscribe(data => {
      console.log('Got user!', data);
      console.log(event);
      if (event.path[0].name === 'player1') {
        this.gitObjOne = data;
      }
      if (event.path[0].name === 'player2') {
        this.gitObjTwo = data;
      }
    });
  }

}
