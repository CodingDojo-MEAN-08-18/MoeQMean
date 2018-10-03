import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-restaurants-new',
  templateUrl: './restaurants-new.component.html',
  styleUrls: ['./restaurants-new.component.css']
})
export class RestaurantsNewComponent implements OnInit {
  name: string;
  cuisine: string;
  error: Boolean = false;
  errorMsg: string;
  createData: any = {};
  matcher = new MyErrorStateMatcher();

  cuisineFormControl = new FormControl('', [
    Validators.required
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() { }

  newRestaurant() {
    const restInfo = {
      name: this.name,
      cuisine: this.cuisine
    };
    const observable = this.httpService.create(restInfo);
    observable.subscribe(data => {
      console.log('Restaurant created!', data);
      this.createData = data;

      if (!this.name || this.name.length < 3) {
        this.error = true;
        this.errorMsg = 'Restaurant names must contain at least 3 characters!';
      } else if (!this.cuisine || this.cuisine.length < 3) {
        this.error = true;
        this.errorMsg = 'Cuisine types must contain at least 3 characters!';
      }

      if (this.createData.message !== 'Error') {
        // this.router.navigate(['/restaurants']);
        window.location.href = '/';
      }
    });
  }

}
