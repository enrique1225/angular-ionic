import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';

@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule,
    IntroRoutingModule,
    IonicModule
  ]
})
export class IntroModule { }
