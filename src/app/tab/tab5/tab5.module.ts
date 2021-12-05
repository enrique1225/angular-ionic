import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Tab5RoutingModule } from './tab5-routing.module';
import { Tab5Component } from './tab5.component';

@NgModule({
  declarations: [Tab5Component],
  imports: [
    CommonModule,
    IonicModule,
    Tab5RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Tab5Module { }
