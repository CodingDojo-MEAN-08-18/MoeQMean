import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RestaurantsComponent } from './restaurants/restaurants.component';
import {RestaurantsNewComponent} from './restaurants-new/restaurants-new.component';
import {RestaurantsReviewsComponent} from './restaurants-reviews/restaurants-reviews.component';
import {RestaurantsEditComponent} from './restaurants-edit/restaurants-edit.component';
import {RestaurantsReviewsNewComponent} from './restaurants-reviews-new/restaurants-reviews-new.component';

// Routes
const routes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent, children: [
      {path: 'new', component: RestaurantsNewComponent},
      {path: ':id', component: RestaurantsReviewsComponent},
      {path: ':id/edit', component: RestaurantsEditComponent},
      {path: ':id/review', component: RestaurantsReviewsNewComponent}
    ]},
  { path: '', redirectTo: 'restaurants', pathMatch: 'full'}
  // { path: 'products', component: ProductsComponent },
  // { path: 'product/new', component: ProductCreateComponent },
  // { path: 'product/edit/:id', component: ProductEditComponent },
  // { path: 'home', redirectTo: '', pathMatch: 'full'}
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
