import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import {ResultsComponent} from "./results/results.component";
import {RankingsComponent} from "./rankings/rankings.component";

const routes: Routes = [
  {path: 'results', component: ResultsComponent},
  {path: 'results', component: RankingsComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ]
})
export class AppRoutingModule { }
