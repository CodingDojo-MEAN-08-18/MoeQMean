import { Component } from '@angular/core';
import { HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MEAN Stack';

  constructor(public _httpService: HttpService){
    this._httpService.getPokemon();
    this._httpService.getPokemonAbility(65);
  }
}
