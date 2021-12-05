import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Tab4RoutingModule } from './tab4-routing.module';
import { Tab4Component } from './tab4.component';

@NgModule({
  declarations: [Tab4Component],
  imports: [
    CommonModule,
    IonicModule,
    Tab4RoutingModule
  ]
})
export class Tab4Module { }
