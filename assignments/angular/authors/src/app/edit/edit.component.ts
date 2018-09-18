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
  name:string;

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
      this.name = this.authorData.data.name;
    });
  }

  editAuthor() {
    let ob = this.httpService.editAuthor(this.authorID, {name: this.name});
    ob.subscribe(data => {
      console.log('Name edit success!', data);
    });
    this.router.navigate(['/']);
  }

}
