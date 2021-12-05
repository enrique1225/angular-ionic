import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneComponent } from './phone.component';

@NgModule({
  declarations: [PhoneComponent],
  imports: [
    CommonModule,
    PhoneRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PhoneModule { }
