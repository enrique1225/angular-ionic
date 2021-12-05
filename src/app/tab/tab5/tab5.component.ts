import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.component.html',
  styleUrls: ['./tab5.component.scss'],
})
export class Tab5Component implements OnInit {

  profileForm: FormGroup;
  isSubmitted = false;

  error_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],

    'birthday': [
      { type: 'required', message: 'Birthday is required.' }
    ],
  }

  constructor(
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.profileForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      birthday: new FormControl('', Validators.compose([
        Validators.required
      ])),
    })
  }

  ngOnInit() {}

  get errorControl() {
    return this.profileForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.profileForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.profileForm.value);
      this.router.navigateByUrl("/login");
    }
  }

  tab4(){
    this.router.navigateByUrl("/tab/tab4")
  }
}
