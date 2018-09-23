import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  title: string;
  price: string;
  imageUrl: string;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }
  create() {
    const observable = this.httpService.new({title: this.title, price: this.price, imageUrl: this.imageUrl});
    observable.subscribe(data => {
      console.log('Item created:', data);
    });
  }

}
