import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.scss'],
})
export class SimulateComponent implements OnInit {

  simulateForm: FormGroup;
  isSubmitted = false;

  error_messages = {
    'balance': [
      { type: 'required', message:'Balance is required.' }
    ],
    'birthday': [
      { type: 'required', message: 'Birthday is required.' }
    ],
  }

  constructor(private router: Router, public formBuilder: FormBuilder){
    this.simulateForm = this.formBuilder.group({
      balance: new FormControl('', Validators.compose([
        Validators.required
      ])),
      birthday: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  ngOnInit() {}

  get errorControl() {
    return this.simulateForm.controls;
  }

  amount_link(){
    this.router.navigateByUrl("/amount")
  }

  return_page(){
    this.router.navigateByUrl("/");
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.simulateForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.simulateForm.value);
      this.router.navigateByUrl("/amount");
    }
  }

}
