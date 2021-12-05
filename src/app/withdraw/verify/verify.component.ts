import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent implements OnInit {

  verifyForm: FormGroup;
  isSubmitted = false;

  error_messages = {
    'CPF': [
      { type: 'required', message: 'CPF is required.' }
    ],
  }

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.verifyForm = this.formBuilder.group({
      CPF: new FormControl('', Validators.compose([
        Validators.required
      ])),
    })
  }

  ngOnInit() {}

  submitForm() {
    this.isSubmitted = true;
    if (!this.verifyForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.verifyForm.value);
      this.router.navigateByUrl("/withdraw/phone");
    }
  }

  prev_page(){
    this.router.navigateByUrl("/withdraw/steps");
  }
}
