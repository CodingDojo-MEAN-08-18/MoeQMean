import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  authorID:string;
  authorData:any={};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService) { }

  ngOnInit() {
    this.authorID = this.route.snapshot.paramMap.get('id');
    console.log(this.authorID);
    this.getSingleAuthor();
  }

  getSingleAuthor(){
    let ob = this.httpService.getSingleAuthor(this.authorID);
    ob.subscribe(data => {
      console.log('Got single author', data);
      this.authorData = data;
    });
  }

  editAuthor() {
    let ob = this.httpService.edit
  }

}
