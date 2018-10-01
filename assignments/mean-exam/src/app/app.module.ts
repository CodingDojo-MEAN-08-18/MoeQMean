import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Setting HTTP imports
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsNewComponent } from './restaurants-new/restaurants-new.component';
import { RestaurantsReviewsComponent } from './restaurants-reviews/restaurants-reviews.component';
import { RestaurantsEditComponent } from './restaurants-edit/restaurants-edit.component';
import { RestaurantsReviewsNewComponent } from './restaurants-reviews-new/restaurants-reviews-new.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantsNewComponent,
    RestaurantsReviewsComponent,
    RestaurantsEditComponent,
    RestaurantsReviewsNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
