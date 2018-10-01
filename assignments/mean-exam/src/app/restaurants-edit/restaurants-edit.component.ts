import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-restaurants-edit',
  templateUrl: './restaurants-edit.component.html',
  styleUrls: ['./restaurants-edit.component.css']
})
export class RestaurantsEditComponent implements OnInit {
  restId: string;
  singleData: any = {};
  name: string;
  cuisine: string;

  constructor(
    private activated: ActivatedRoute,
    private httpServ: HttpService,
    private router: Router,
    private zone: NgZone) { }

  ngOnInit() {
    this.restId = this.activated.snapshot.paramMap.get('id');
    this.getSingle();
  }

  getSingle() {
    const ob = this.httpServ.getSingle(this.restId);
    ob.subscribe(data => {
      this.singleData = data;
      console.log('Got single data', this.singleData);

      this.name = this.singleData.data.name;
      this.cuisine = this.singleData.data.cuisine;
    });
  }

  updateSingle() {
    const updateData = {
      name: this.name,
      cuisine: this.cuisine
    };
    const ob = this.httpServ.updateSingle(this.restId, updateData);
    ob.subscribe(data => {
      console.log('Updated!', data);
      return this.zone.run(() => this.router.navigate(['']));
    });
  }


}
