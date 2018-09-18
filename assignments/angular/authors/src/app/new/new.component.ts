import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  name:string;
  constructor(
    private httpService: HttpService,
    private router: Router) { }

  ngOnInit() {}

  newAuthor() {
    let observable = this.httpService.new({name: this.name});
    observable.subscribe(data => {
      console.log('Author created!', data);
      this.router.navigate(['/']);
    });
  }
}
