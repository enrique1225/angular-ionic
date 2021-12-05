import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss'],
})
export class AmountComponent implements OnInit {

  simulateForm: FormGroup;
  isSubmitted = false;

  error_messages = {
    'amount': [
      { type: 'required', message:'Amount is required.' }
    ],
  }

  constructor(private router: Router, public formBuilder: FormBuilder){
    this.simulateForm = this.formBuilder.group({
      amount: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  ngOnInit() {}

  get errorControl() {
    return this.simulateForm.controls;
  }

  amount_link(){
    this.router.navigateByUrl("/login")
  }

  return_page(){
    this.router.navigateByUrl("/simulate");
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.simulateForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.simulateForm.value);
      this.router.navigateByUrl("/login");
    }
  }
}
