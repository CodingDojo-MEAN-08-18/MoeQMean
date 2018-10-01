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

  confirmInvalid: Boolean = false;

  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  regUser() {
    const data = {};
    const ob = this.httpService.registerUser(data);
  }

  ngOnInit() {
    this.userForm = this.fb.group({
        firstName: new FormControl('', Validators.required),
        lastName:  new FormControl('', Validators.required),
        email:  new FormControl('', Validators.required),
        password: ['', [Validators.required]],
        confirmPass: ['', [Validators.required]]
    }, {validator: this.checkPasswords });

    console.log(this.userForm);
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPass.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  checkConfirmPass() {
    let pass = this.userForm.controls.password.value;
    let confirmPass = this.userForm.controls.confirmPass.value;

    console.log(pass);
    console.log(confirmPass);

    if (pass !== confirmPass) {
      this.confirmInvalid = true;
    } else {
      this.confirmInvalid = false;
    }
  }

  currentForm() {
    console.log(this.userForm);
  }
}
