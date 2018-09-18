import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from "./new/new.component";
import { EditComponent } from "./edit/edit.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'edit/:id', component: EditComponent},
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
