import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  pokeData = {};
  abilityData = {};
  taskData = {};

  constructor(private _http: HttpClient) {}

  getTasks() {
    return this._http.get('/tasks');
  }
  getSingleTask(task){
    // let tempObservable = this._http.get('/'+ task);
    // tempObservable.subscribe(data => console.log('Got single task: ', data));
    return this._http.get('/'+ task);
  }
  newTask(task){
    let tempObservable = this._http.get('/new/'+ task);
    tempObservable.subscribe(data => console.log('Created new task: ', data));
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      console.log('Got a pokemon!', data);
      this.pokeData = data;
    });
  }
  getPokemonAbility(num) {
    let abilityData = this._http.get('https://pokeapi.co/api/v2/ability/'+ num +'/');
    abilityData.subscribe(data => {
      this.abilityData = data;
      console.log(this.abilityData);
    });
  }
}
