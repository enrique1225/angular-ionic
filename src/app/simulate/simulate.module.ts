import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SimulateRoutingModule } from './simulate-routing.module';
import { SimulateComponent } from './simulate.component';

@NgModule({
  declarations: [SimulateComponent],
  imports: [
    CommonModule,
    IonicModule,
    SimulateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SimulateModule { }
