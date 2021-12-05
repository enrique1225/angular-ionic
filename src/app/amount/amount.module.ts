import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AmountRoutingModule } from './amount-routing.module';
import { AmountComponent } from './amount.component';

@NgModule({
  declarations: [AmountComponent],
  imports: [
    CommonModule,
    IonicModule,
    AmountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AmountModule { }
