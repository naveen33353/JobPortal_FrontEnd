import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LandingComponent } from './landing/component/landing/landing.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {
    path :'',
    component : LandingComponent
  },
  {
    path :'',
    loadChildren : () => import('../app/auth/auth.module').then(m => m.AuthModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
