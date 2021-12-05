import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  password_type: string = 'password';

  error_messages = {
    'email': [
      { type: 'required', message:'Email is required.' },
      { type: 'required', valid_message:'Email is not valid.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password minimum length is 3.' },
      { type: 'maxlength', message: 'Password maximum length is 30.' }
    ],
  }

  constructor(private router: Router, public formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), 
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])),
    });
  }

  ngOnInit() {}

  get errorControl() {
    return this.loginForm.controls;
  }

  register_link(){
    this.router.navigateByUrl("/register")
  }

  togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.loginForm.value);
      this.router.navigateByUrl("/withdraw/intro");
    }
  }
}
