import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'simulate',
    loadChildren: () => import('./simulate/simulate.module').then( m => m.SimulateModule)
  },
  {
    path: 'amount',
    loadChildren: () => import('./amount/amount.module').then( m => m.AmountModule)
  },
  {
    path: 'withdraw/intro',
    loadChildren: () => import('./withdraw/intro/intro.module').then( m => m.IntroModule)
  },
  {
    path: 'withdraw/steps',
    loadChildren: () => import('./withdraw/steps/steps.module').then( m => m.StepsModule)
  },
  {
    path: 'withdraw/verify',
    loadChildren: () => import('./withdraw/verify/verify.module').then( m => m.VerifyModule)
  },
  {
    path: 'withdraw/phone',
    loadChildren: () => import('./withdraw/phone/phone.module').then( m => m.PhoneModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainModule)
  },
  {
    path: 'tab/tab4',
    loadChildren: () => import('./tab/tab4/tab4.module').then( m => m.Tab4Module)
  },
  {
    path: 'tab/tab5',
    loadChildren: () => import('./tab/tab5/tab5.module').then( m => m.Tab5Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
