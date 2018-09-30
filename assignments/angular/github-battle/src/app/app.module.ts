import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    RankingsComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
