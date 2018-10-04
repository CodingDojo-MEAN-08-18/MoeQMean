import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bicycle-marketplace';

  userForm: FormGroup;

  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  regUser() {
    const regData = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      password: this.userForm.value.password
    };
    const ob = this.httpService.registerUser(regData);
    ob.subscribe(data => {
      console.log('User registered', data);
    });
  }

  ngOnInit() {
    this.userForm = this.fb.group({
        firstName: new FormControl('', [Validators.required]),
        lastName:  new FormControl('', [Validators.required]),
        email:  new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPass: new FormControl('', [Validators.required])
    });

    console.log(this.userForm);
  }

}
