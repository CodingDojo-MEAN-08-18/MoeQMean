import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewAuthorComponent} from './new-author/new-author.component';
import {AuthorEditComponent} from './author-edit/author-edit.component';
import {QuotesComponent} from './quotes/quotes.component';
import {QuotesNewComponent} from './quotes-new/quotes-new.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: NewAuthorComponent},
  {path: 'edit/:id', component: AuthorEditComponent},
  {path: 'quotes/:id', component: QuotesComponent},
  {path: 'write/:id', component: QuotesNewComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
