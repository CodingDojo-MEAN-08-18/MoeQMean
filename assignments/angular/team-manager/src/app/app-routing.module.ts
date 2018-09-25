import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { PlayersAddComponent } from './players-add/players-add.component';
import { StatusComponent } from './status/status.component';
import { PlayersListComponent } from './players-list/players-list.component';
import {GameOneComponent} from './game-one/game-one.component';
import {GameTwoComponent} from './game-two/game-two.component';
import {GameThreeComponent} from './game-three/game-three.component';

const routes: Routes = [
  {path: 'players', redirectTo: 'players/list'},
  {path: 'players', component: PlayersComponent, children: [
      {path: 'list', component: PlayersListComponent},
      {path: 'add', component: PlayersAddComponent}]
  },
  {path: 'status', redirectTo: 'status/game/1'},
  {path: 'status', component: StatusComponent, children: [
      {path: 'game/1', component: GameOneComponent},
      {path: 'game/2', component: GameTwoComponent},
      {path: 'game/3', component: GameThreeComponent}
    ]},
  {path: '', pathMatch: 'full', redirectTo: 'players/list'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes, {useHash: true})]
})
export class AppRoutingModule { }
