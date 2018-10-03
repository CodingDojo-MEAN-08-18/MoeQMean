import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
  userID: string;
  name: string;
  userData: any = {};

  constructor(private httpService: HttpService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    const ob = this.httpService.readSingle(this.userID);
    ob.subscribe(data => {
      this.userData = data;

      this.name = this.userData.data.name;
      console.log(this.userData);
    });
  }

  updateAuthor() {
    const ob = this.httpService.update(this.userID, {name: this.name});
    ob.subscribe(data => {
      console.log('Author updated');
      window.location.href = '/';
    });
  }

}
