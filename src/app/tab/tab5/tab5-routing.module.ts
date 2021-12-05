import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab5Component } from './tab5.component';

const routes: Routes = [{
  path: '',
  component: Tab5Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab5RoutingModule { }
