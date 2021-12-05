import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {

  phoneForm: FormGroup;
  isSubmitted = false;

  error_messages = {
    'phone': [
      { type: 'required', message: 'Phone Number is required.' }
    ],
  }

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.phoneForm = this.formBuilder.group({
      phone: new FormControl('', Validators.compose([
        Validators.required
      ])),
    })
  }

  ngOnInit() {}

  submitForm() {
    this.isSubmitted = true;
    if (!this.phoneForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.phoneForm.value);
      this.router.navigateByUrl("/main");
    }
  }

  cancel(){
    this.router.navigateByUrl("/withdraw/verify");
  }

  ok(){
    this.router.navigateByUrl("/main");
  }
}
