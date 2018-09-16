// import { AlphaComponent } from './alpha/alpha.component';
// import { BetaComponent } from './beta/beta.component';
// import { GammaComponent } from './gamma/gamma.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SeattleComponent} from "./seattle/seattle.component";
import {BurbankComponent} from "./burbank/burbank.component";
import {SanJoseComponent} from "./san-jose/san-jose.component";
import {DallasComponent} from "./dallas/dallas.component";
import {WashingtonComponent} from "./washington/washington.component";
import {ChicagoComponent} from "./chicago/chicago.component";

const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'seattle',component: SeattleComponent },
  { path: 'burbank',component: BurbankComponent },
  { path: 'sanjose',component: SanJoseComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'dc',component: WashingtonComponent },
  { path: 'chicago',component: ChicagoComponent },
  // use a colon and parameter name to include a parameter in the url
  // { path: 'gamma/:id', component: GammaComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
