import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulateComponent } from './simulate.component';


const routes: Routes = [{
  path: "",
  component: SimulateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulateRoutingModule { }
