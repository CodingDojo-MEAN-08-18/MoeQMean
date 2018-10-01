import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Let\'s eat';

  constructor(private activatedRoute: ActivatedRoute)  {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      // this will be called every time route changes
      // so you can perform your functionality here
    });
  }
}
