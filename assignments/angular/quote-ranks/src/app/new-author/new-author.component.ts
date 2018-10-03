import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.scss']
})
export class NewAuthorComponent implements OnInit {
  name: string;

  constructor(
    private httpService: HttpService,
    private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    const ob = this.httpService.createAuthor({name: this.name});
    ob.subscribe(data => {
      console.log('Created author!', data);
      this.router.navigate(['/']);
    }, error => {
      console.log('There was an error:', error);
    });
  }

}
